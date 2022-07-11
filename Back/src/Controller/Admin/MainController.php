<?php

namespace App\Controller\Admin;

use App\Entity\Actualite;
use App\Entity\MusicGroup;
use App\Form\ActualiteType;
use App\Repository\ActualiteRepository;
use App\Repository\MusicGroupRepository;
use App\Utils\Utils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class MainController extends AbstractController
{
    private $directory;
    private $directoryAttachment;

    public function __construct($directoryAttachment, $directory)
    {
        $this->directory = $directory;
        $this->directoryAttachment = $directoryAttachment;
    }

    #[Route('/', name: 'home')]
    public function browse(): Response
    {
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    // #[Route('/groups', name: 'group')]
    // public function group(EntityManagerInterface $em): Response
    // {
    //     $g1 = new MusicGroup();
    //     $g1->setName('Les amateurs de Jazz 22');
    //     $g2 = new MusicGroup();
    //     $g2->setName('Blue Moon Jazz Trio/Quartet');
    //     $g3 = new MusicGroup();
    //     $g3->setName('Cameron Quartet');
    //     $g4 = new MusicGroup();
    //     $g4->setName('Middle jazz Quartet');

    //     $em->persist($g1);
    //     $em->persist($g2);
    //     $em->persist($g3);
    //     $em->persist($g4);

    //     $em->flush();

    //     return $this->render('main/index.html.twig', [
    //         'controller_name' => 'MainController',
    //     ]);
    // }

    #[Route('/toutes-les-actus', name: 'actu_browse')]
    public function actusBrowse(ActualiteRepository $ar): Response
    {
        $actus = $ar->findAll();

        return $this->render('actu/index.html.twig', [
            'controller_name' => 'ActuMainController',
            'actus' => $actus,
        ]);
    }

    #[Route('/actualite/lecture/{id<\d+>}', name: 'actu_read')]
    public function actusRead(ActualiteRepository $ar, $id): Response
    {
        $actu = $ar->find($id);

        if (null === $actu) {
            throw $this->createAccessDeniedException('Actualité non trouvée !');
        }

        return $this->render('actu/read.html.twig', [
            'controller_name' => 'ActuMainController',
            'actu' => $actu,
        ]);
    }

    #[Route('/actualite/edition/{id<\d+>}', name: 'actu_edit')]
    public function actusEdit(ActualiteRepository $ar, $id, Request $request,EntityManagerInterface $em, SluggerInterface $slugger, Filesystem $filesystem, Utils $utils): Response
    {
        $token = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-item', $token)) {
            throw $this->createAccessDeniedException('Action non autorisée !');
        }

        $actu = $ar->find($id);

        if (null === $actu) {
            throw $this->createAccessDeniedException('Actualité non trouvée !');
        }

        $form = $this->createForm(ActualiteType::class, $actu);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $picture = $request->files->get('actualite')['picture'];

            if (null !== $picture) {
                $originalPicture = pathinfo($picture->getClientOriginalName(), PATHINFO_FILENAME);
                $safePicture = $slugger->slug($originalPicture);
                $newPicture = $safePicture.'-'.uniqid().'.'.$picture->guessExtension();
                $picturePath = str_replace($this->directoryAttachment, '', $this->getParameter('directory').'/'.$newPicture);
    
                if (null !== $actu->getPicture() && $filesystem->exists($actu->getPicture())) {
                    $filesystem->remove($actu->getPicture());
                };

                try {
                    $picture->move(
                        $this->getParameter('directory'),
                        $newPicture
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                    // dd('oups');
                }
    
                $actu->setPicture($picturePath);
            }

            $actualite = $utils->checkContent($actu);

            $em->persist($actu);
            $em->flush();

            return $this->redirectToRoute('actu_browse');
        }

        return $this->render('actu/add_edit.html.twig', [
            'controller_name' => 'ActuMainController',
            'actu' => $actu,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/actualite/nouvelle', name: 'actu_add')]
    public function actusAdd(ActualiteRepository $ar, Request $request,EntityManagerInterface $em, SluggerInterface $slugger, Utils $utils): Response
    {
        $token = $request->request->get('token');
        if (!$this->isCsrfTokenValid('add-edit-item', $token)) {
            throw $this->createAccessDeniedException('Action non autorisée !');
        }

        $actualite = new Actualite();

        $form = $this->createForm(ActualiteType::class, $actualite);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $picture = $request->files->get('actualite')['picture'];

            $originalPicture = pathinfo($picture->getClientOriginalName(), PATHINFO_FILENAME);
            $safePicture = $slugger->slug($originalPicture);
            $newPicture = $safePicture.'-'.uniqid().'.'.$picture->guessExtension();
            $picturePath = str_replace($this->directoryAttachment, '', $this->getParameter('directory').'/'.$newPicture);

            try {
                $picture->move(
                    $this->getParameter('directory'),
                    $newPicture
                );
            } catch (FileException $e) {
                // ... handle exception if something happens during file upload
                // dd('oups');
            }


            $actualite->setPicture($picturePath);
            // dd($actualite);

            $actualite = $utils->checkContent($actualite);

            
            $em->persist($actualite);

            $em->flush();

            return $this->redirectToRoute('actu_browse');
        }

        return $this->render('actu/add_edit.html.twig', [
            'controller_name' => 'ActuMainController',
            'actu' => $actualite,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/actualite/suppression/{id<\d+>}', name: 'actu_delete')]
    public function actusDelete(ActualiteRepository $ar, $id, Request $request, EntityManagerInterface $em, Filesystem $filesystem): Response
    {
        $token = $request->request->get('token');
        if (!$this->isCsrfTokenValid('delete-item', $token)) {
            throw $this->createAccessDeniedException('Action non autorisée !');
        }

        $actu = $ar->find($id);

        if (null === $actu) {
            throw $this->createAccessDeniedException('Actualité non trouvée !');
        }

        if (null !== $actu->getPicture() && $filesystem->exists($actu->getPicture())) {
            $filesystem->remove($actu->getPicture());
        };

        $em->remove($actu);
        $em->flush();

        return $this->redirectToRoute('actu_browse');
    }

    #[Route('/actualite/affichage/{id<\d+>}', name: 'actu_display')]
    public function actusDisplay(ActualiteRepository $ar, $id, Request $request, EntityManagerInterface $em): Response
    {
        $token = $request->request->get('token');
        if (!$this->isCsrfTokenValid('display-item', $token)) {
            throw $this->createAccessDeniedException('Action non autorisée !');
        }

        $actualite = $ar->find($id);

        if (null === $actualite) {
            throw $this->createAccessDeniedException('Actualité non trouvée !');
        }

        $actualite->setDisplay(!$actualite->isDisplay());

        $em->persist($actualite);
        $em->flush();
        
        return $this->redirectToRoute('actu_browse');
    }
}
