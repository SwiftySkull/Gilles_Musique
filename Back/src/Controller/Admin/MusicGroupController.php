<?php

namespace App\Controller\Admin;

use App\Repository\MusicGroupRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MusicGroupController extends AbstractController
{
    #[Route('/music/group', name: 'music_browse')]
    public function index(MusicGroupRepository $mgr): Response
    {
        $groups = $mgr->findAll();

        dd($groups);

        return $this->render('music_group/index.html.twig', [
            'controller_name' => 'MusicGroupController',
            'groups' => $groups,
        ]);
    }
}
