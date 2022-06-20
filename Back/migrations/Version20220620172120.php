<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220620172120 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actualite ADD music_group_id INT DEFAULT NULL, DROP music_group');
        $this->addSql('ALTER TABLE actualite ADD CONSTRAINT FK_5492819739478561 FOREIGN KEY (music_group_id) REFERENCES music_group (id)');
        $this->addSql('CREATE INDEX IDX_5492819739478561 ON actualite (music_group_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actualite DROP FOREIGN KEY FK_5492819739478561');
        $this->addSql('DROP INDEX IDX_5492819739478561 ON actualite');
        $this->addSql('ALTER TABLE actualite ADD music_group SMALLINT DEFAULT NULL, DROP music_group_id');
    }
}
