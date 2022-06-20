<?php

namespace App\Entity;

use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ActualiteRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ActualiteRepository::class)]
#[ORM\HasLifecycleCallbacks()]
class Actualite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['actu'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['actu'])]
    private $title;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['actu'])]
    private $date;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['actu'])]
    private $content;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['actu'])]
    private $picture;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['actu'])]
    private $display;

    #[ORM\Column(type: 'datetime_immutable')]
    private $createdAt;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private $updatedAt;

    #[ORM\Column(type: 'text', nullable: true)]
    private $originalContent;

    #[ORM\ManyToOne(targetEntity: MusicGroup::class, inversedBy: 'actualites')]
    #[Groups(['actu'])]
    private $musicGroup;

    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->display = false;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function isDisplay(): ?bool
    {
        return $this->display;
    }

    public function setDisplay(bool $display): self
    {
        $this->display = $display;

        return $this;
    }


    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Function to update the updatedAt value automatically
     * 
     * @ORM\PreUpdate
     */
    public function setUpdatedAtValue()
    {
        $this->updatedAt = new \DateTime();
    }

    public function getOriginalContent(): ?string
    {
        return $this->originalContent;
    }

    public function setOriginalContent(?string $originalContent): self
    {
        $this->originalContent = $originalContent;

        return $this;
    }

    public function getMusicGroup(): ?MusicGroup
    {
        return $this->musicGroup;
    }

    public function setMusicGroup(?MusicGroup $musicGroup): self
    {
        $this->musicGroup = $musicGroup;

        return $this;
    }
}
