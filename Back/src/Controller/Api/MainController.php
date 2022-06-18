<?php

namespace App\Controller\Api;

use App\Repository\ActualiteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/api/all', name: 'app_api_main')]
    public function index(ActualiteRepository $ar): JsonResponse
    {
        $actus = $ar->findBy(['display' => true], ['date' => 'DESC']);

        return $this->json([
            'actus' => $actus,
        ], 200, [], ['groups' => ['actu']]);
    }

    #[Route('/api/last', name: 'app_api_last')]
    public function lastActu(ActualiteRepository $ar): JsonResponse
    {
        $actus = $ar->findBy(['display' => true], ['date' => 'DESC'], 3);

        return $this->json([
            'actus' => $actus,
        ], 200, [], ['groups' => ['actu']]);
    }

    #[Route('/api/single/{id}', name: 'app_api_single')]
    public function singleActu(ActualiteRepository $ar, $id): JsonResponse
    {
        $actu = $ar->find($id);

        return $this->json([
            'actu' => $actu,
        ], 200, [], ['groups' => ['actu']]);
    }
}
