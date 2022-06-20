<?php

namespace App\Form;

use App\Entity\Actualite;
use App\Entity\MusicGroup;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
// use App\Form\ActualiteType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ActualiteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre de l\'actualité',
                'empty_data' => null,
                'constraints' => [
                    new NotBlank(),
                ],
            ])
            ->add('musicGroup', EntityType::class, [
                'label' => 'Groupe se produisant',
                'class' => MusicGroup::class,
                'choice_label' => 'name',
                'empty_data' => null,
                'expanded' => true,
                'multiple' => false,
                'constraints' => [
                    // new NotNull(),
                ],
            ])
            ->add('date', DateTimeType::class, [
                'label' => 'Date de l\'actualité',
                'empty_data' => null,
                'widget' => 'choice',
                // 'input'  => 'datetime_immutable',
                'constraints' => [
                    new NotNull(),
                ],
            ])
            ->add('originalContent', TextareaType::class, [
                'label' => 'Contenu de l\'actualité',
                'empty_data' => null,
                'constraints' => [
                    new NotBlank(),
                ],
                'attr' => [
                    'style' => 'min-height: 150px',
                ],
            ])
            ->add('picture', FileType::class, [
                'label' => 'Photo de l\'actualité',
                'mapped' => false,
                'constraints' => [
                    new File([
                        'mimeTypes' => [
                            'image/png',
                            'image/jpeg',
                        ],
                        'mimeTypesMessage' => 'Le fichier n\'est pas au bon format (.png, .jpg, .jpeg)',
                        'maxSize' => 5000000,
                        'maxSizeMessage' => 'Le fichier est trop volumineux et ne doit pas faire plus que 5Mo.',
                    ]),
                ],
                'constraints' => [

                ],
            ])
            // ->add('createdAt')
            // ->add('updatedAt')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Actualite::class,
        ]);
    }
}
