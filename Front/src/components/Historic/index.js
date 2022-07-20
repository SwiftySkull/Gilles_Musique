/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import Archenteron from 'src/assets/images/historique/Archenteron.jpg';
import SereneNJP from 'src/assets/images/historique/SERENE QUARTET NJP 1980.jpeg';
import SereneStDie from 'src/assets/images/historique/SERENE QUARTET St DIE 1981.jpeg';
import SereneStDieConcert from 'src/assets/images/historique/SERENE QUARTET St DIE concert 1981.jpeg';
import PacoetlesProlos from 'src/assets/images/historique/paco et les prolos.jpeg';
import Felajama1982 from 'src/assets/images/historique/FELAJAMA 1982.jpeg';
import BTQ1988 from 'src/assets/images/historique/Blue Train Quartet 1988.jpg';
import BTQ92CM from 'src/assets/images/historique/BTQ 92 CM.png';
import BTQ90 from 'src/assets/images/historique/BTQ 90.png';
import CameronTrio from 'src/assets/images/historique/Cameron Trio.JPG';
import BlueUp from 'src/assets/images/historique/Blue up 6.jpg';
import CCW from 'src/assets/images/historique/Caroline Croizat Workshop.jpg';
import LindaChabertQuartet from 'src/assets/images/historique/Linda Chabert Quartet.jpg';
import LindaChabertTrio from 'src/assets/images/historique/Linda Chabert Trio.jpg';
import Photo1 from 'src/assets/images/historique/1.jpg';
import Hiatus from 'src/assets/images/historique/Hiatus Petit Journal.jpg';
import Recife from 'src/assets/images/historique/recife.jpg';
import Helene1 from 'src/assets/images/historique/Helen and the Clogs.jpg';
import Helene2 from 'src/assets/images/historique/Helene and the clogs.jpg';
import July from 'src/assets/images/historique/july and the clogs.jpg';
import Jelly from 'src/assets/images/historique/Jelly G concert à L Ecoutille (Courtry 77).jpg';

import './historic.scss';

import {
  groupsUrl,
} from 'src/data/urls';

// == Composant
const Historic = ({

}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="historic">
      <h1>Historique</h1>
      <div className="histo-content">
        <p>&#40;Cliquez sur les images pour les ouvrir en grand dans un nouvel onglet&#41;</p>
        <h2 id="year-1973">1973</h2>
        <p>Le 1er vrai groupe « <strong>Archenteron</strong> », je suis guitariste !!!</p>
        <p>Groupe pop, folk formé de Jean Pierre Bacca <em>&#40;guitare et compositions&#41;</em>, Philippe Gauthier <em>&#40;batterie&#41;</em>, Roberto au clavier et composition, Jean Luc à la guitare solo !!!</p>
        <p>Sur une des compositions de Jean Pierre, je n'arrive pas à jouer une suite d'accords, alors sur ce morceau je prends la basse !!! Et là révélation : 4 cordes à la place de 6... C'est top !!!</p>
        <div className="picture-to-open"><a href="/assets/historique/Archenteron.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={Archenteron} alt="Archenteron" /></a></div>
        <h2 id="year-1974">1974</h2>
        <p>A l'armée à Berlin, j'assure les parties basses avec d'autres musiciens soit en rock soit en jazz <em>&#40;alors que je n'y connaissais rien, uniquement à la feuille !!&#41;</em></p>
        <h2 id="year-1976">1976</h2>
        <p>Naissance de <strong>Graffiti</strong> avec Olivier Lehrer <em>&#40;clavier&#41;</em>, Philippe Gauthier <em>&#40;batterie&#41;</em>, moi à la basse électrique devenu mon nouvel instrument et Gaston au sax.</p>
        <p>Entre pop et free jazz <em>&#40;celui où on fait n'importe quoi !!!&#41;</em>, adepte des fêtes d'extrême gauche et des maisons de la culture de banlieue !!!</p>
        <h2 id="year-1977">1977</h2>
        <p>Dans free jazz, il y a jazz et l'envie de comprendre et jouer du jazz s'impose, aussi le trio de base Olivier/Philippe/Gilles s'entoure de vrais musiciens de jazz : Gilles Gustau <em>&#40;guitare&#41;</em>, Thierry Bruneau <em>&#40;sax alto, tenor et clarinette basse&#41;</em> et  Jacques Oger au sax ténor.</p>
        <p>Apprentissage des standards et de thèmes plus modernes tendance Eric Dolphy, Charlie Mingus ; un vrai bonheur que de commencer à comprendre les structures, la manière d'improviser et surtout d'accompagner le mieux possible les solistes !!! Et comme on se la pétait nous nous sommes intitulés :</p>
        <p><strong>Art Ensemble of Montfermeil</strong>, car avec Philippe on habitait en communauté dans un pavillon de cette banlieue !!! Tout un programme !!! Période où je passe progressivement de la basse à la contrebasse.</p>
        <h2 id="year-1979">1979</h2>
        <p>Naissance du <strong>Serene Quartet</strong> : Thierry Bruneau <em>&#40;sax alto et tenor, basson, clarinette basse&#41;</em>, Paul Chenal <em>&#40;trompette, tuba baryton&#41;</em>, Rainer Robben <em>&#40;batterie&#41;</em>.</p>
        <p>Le groupe, influencé par le blues et le free jazz, interprète des œuvres du répertoire de Monk, Charlie Mingus, Eric Dolphy et Ornette Coleman. Concerts, notamment au Nancy Jazz Pulsations en 1980, à St Dié <em>&#40;1981&#41;</em>  et animation stages <em>&#40;S Dié&#41;</em>.</p>
        <p>Le départ de Rainer en Allemagne sonne la mort du groupe. J'ai appris plein de choses avec ce quartet, mais je voyais bien mes limites instrumentales et harmoniques, c'est vraiment ce groupe qui m'a confirmé l'envie de jouer du jazz.</p>
        <div className="triple-pictures">
          <div className="picture-to-open"><a href="/assets/historique/SERENE QUARTET NJP 1980.jpeg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={SereneNJP} alt="Serene Quartet NJP 1980" /></a></div>
          <div className="picture-to-open"><a href="/assets/historique/SERENE QUARTET St DIE 1981.jpeg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={SereneStDie} alt="Serene Quartet Saint Die 1981" /></a></div>
          <div className="picture-to-open"><a href="/assets/historique/SERENE QUARTET St DIE concert 1981.jpeg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={SereneStDieConcert} alt="Serene Quartet Saint Die concert 1981" /></a></div>
        </div>
        <p>D'autant que parallèlement, je jouais avec le poète Paco Cruz dans le célèbre <strong>Paco et les Prolos</strong> avec mon compère des années 70 Philippe Gauthier à la batterie, Philippe Poulain à la guitare, et un saxophoniste Gérard <em>&#40;dont j'ai oublié le nom!!&#41;</em> : la poésie, le free, les atmosphères improvisées, café théâtre, maisons des jeunes, quelques scènes !!! Et même un article dans Libé pour un spectacle aux Entrepôts Frigorifiques du 13eme !!!</p>
        <div className="picture-to-open"><a href="/assets/historique/paco et les prolos.jpeg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={PacoetlesProlos} alt="Paco et les prolos" /></a></div>
        <h2 id="year-1981">1981</h2>
        <p>Au cours d'un concert d'Art Ensemble of Montfermeil, dans une fête, rencontre avec le saxophoniste Stéphane Maggi, ce sera le début d'une longue période de collaboration.</p>
        <p>D'abord avec <strong>FELAJAMA</strong> : avec en plus Christophe Jacquemin au piano et Philippe Laroche à la batterie, d'où l'acronyme FELAJAMA, les standards à tire larigot, plusieurs concerts dans le début des années 80, avec des impros avec danseuses.</p>
        <div className="picture-to-open"><a href="/assets/historique/FELAJAMA 1982.jpeg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={Felajama1982} alt="FELAJAMA 1982" /></a></div>
        <p>Après plusieurs années de travail en commun, les départs de Philippe et de Christophe font que le groupe recherche d'autres musiciens et ainsi naît au milieu des années 80 le groupe <strong>Blue Train quartet</strong>, avec le pianiste Bernard Mercier, et  différents musiciens avant de se consolider avec les frères Hamadache : Abdel à la guitare et Momo à la batterie et devenir le <strong>Blue Train quintet</strong>.</p>
        <p>Ce groupe a joué pendant une quinzaine d'années dans les clubs, les restos, les fêtes et bon nombre de concerts pour les CE, CCE, la CGT et le PC à la fête de l'Huma notamment.</p>
        <div className="picture-to-open"><a href="/assets/historique/Blue Train Quartet 1988" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={BTQ1988} alt="BTQ 1988" /></a></div>
        <p>En outre plusieurs années au Club Med <em>&#40;une semaine l'été et une semaine l'hiver&#41;</em> en France <em>&#40;tous les clubs&#41;</em>, Suisse et Italie.</p>
        <div className="picture-to-open"><a href="/assets/historique/BTQ 92 CM.png" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={BTQ92CM} alt="BTQ 1992 Club Med" /></a></div>
        <div className="picture-to-open"><a href="/assets/historique/BTQ 90.png" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={BTQ90} alt="BTQ 1990, 1993" /></a></div>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/Summertime.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="BTQuartet en public en 1996 Summertime"
              src="/sounds/Summertime.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>BTQuartet en public en 1996 Summertime</figcaption>
        </figure>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/All Blues.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Quintet en public All Blues"
              src="/sounds/All Blues.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Quintet en public All Blues</figcaption>
        </figure>
        <p>Suite au départ en province de Bernard Mercier, le groupe va ensuite se transformer et se produire en <strong>quintet</strong> avec Antoine Maunoury à la trompette et en <strong>sextet</strong> avec la chanteuse Alexandra Lupidi.</p>
        <p>Un CD de compositinos : <strong>38 000 pile</strong> !</p>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/02-Le-cry-trop-lydien.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="38 000 pile ! Le cri trop Lydien"
              src="/sounds/02-Le-cry-trop-lydien.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>38 000 pile ! Le cri trop Lydien</figcaption>
        </figure>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/Tribute-to-Malika.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Tribute to Malika"
              src="/sounds/Tribute-to-Malika.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Tribute to Malika</figcaption>
        </figure>
        <h2 id="year-2000">2000</h2>
        <p>Comme souvent dans le jazz, les groupes se font et se défont, au début des années 2000, clap de fin pour le Blue Train !!</p>
        <p>Je joue dans plusieurs formations du 93 : <strong>Solar quartet</strong> avec Olivier Lehrer au piano, Gérard  Cailleau <em>&#40;batterie&#41;</em> et Christian Husson <em>&#40;trompette&#41;</em> et  le quartet d'Annie Rodriguez avec Olivier et Gérard.  Une quinzaine de concerts de 2000 à 2003.</p>
        <h2 id="year-0206">2002 à 2006</h2>
        <p>Je rejoins le groupe <strong>Hiatus</strong>, groupe de la banlieue sud-est, qui n'a plus de bassiste. <strong>Hiatus</strong> est composé de Philippe Vuillaume <em>&#40;trompette et chant&#41;</em>, Didier Guillon <em>&#40;sax&#41;</em>, Hervé Leroy <em>&#40;guitare&#41;</em>, Alain Geay <em>&#40;percussions&#41;</em> et Gilles Durand <em>&#40;batterie&#41;</em>.</p>
        <div className="picture-to-open"><a href="/assets/historique/Hiatus Petit Journal.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={Hiatus} alt="Hiatus enregistrement Petit Journal" /></a></div>
        <p>Deux enregistrements :</p>
        <ul>
          <li>
            <p>Un CD « Même pas mal » en 2003</p>
            <figure className="audio-embed">
              <audio
                controls
                src="/sounds/02-Crystal-Silence.mp3"
                type="audio/mp3"
              >
                <track
                  kind="captions"
                  descriptions="Extrait du CD : Crystal Silence"
                  src="/sounds/02-Crystal-Silence.mp3"
                  type="audio/mp3"
                />
                Your browser does not support the
                <code>audio</code> element.
              </audio>
              <figcaption>Extrait du CD : Crystal Silence</figcaption>
            </figure>
          </li>
          <li>
            <p>Un concert au Petit journal Montparnasse en juin 2006.</p>
            <figure className="audio-embed">
              <audio
                controls
                src="/sounds/Little-Sunflower.mp3"
                type="audio/mp3"
              >
                <track
                  kind="captions"
                  descriptions="Extrait enregistrement live : Little Sunflower"
                  src="/sounds/Little-Sunflower.mp3"
                  type="audio/mp3"
                />
                Your browser does not support the
                <code>audio</code> element.
              </audio>
              <figcaption>Extrait enregistrement live : Little Sunflower</figcaption>
            </figure>
          </li>
        </ul>
        <p>Ensuite pause musicale de trois ans, à part quelques bœufs et remplacements, plus de groupe attitré.</p>
        <h2 id="year-2009">2009</h2>
        <p><strong>Départ en 2009 pour la Bretagne</strong>, et tout s'accélère !!!</p>
        <h2 id="year-1011">2010 - 2011</h2>
        <p>Je rejoins un groupe de pop/rock <strong>Helen and the Clogs</strong> avec la chanteuse Hélène  Thauvin et le guitariste Jean Luc Chicot, un répertoire avec de nombreux morceaux de Janis Joplin. Une vingtaine de concerts.</p>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/Bobby mc gee.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Extrait enregistrement live à Ploubalay : Boby Mc Gee"
              src="/sounds/Bobby mc gee.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Extrait enregistrement live à Ploubalay : Boby Mc Gee</figcaption>
        </figure>
        <div className="picture-to-open"><a href="/assets/historique/Helen and the Clogs.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={Helene1} alt="Helen and the Clogs" /></a></div>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/piece of my heart.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Extrait enregistrement live à Ploubalay : Piece of my heart"
              src="/sounds/piece of my heart.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Extrait enregistrement live à Ploubalay : Piece of my heart</figcaption>
        </figure>
        <div className="picture-to-open"><a href="/assets/historique/Helene and the clogs.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={Helene2} alt="Helen and the Clogs" /></a></div>
        <p>Quand Hélène est indisponible c'est July qui assure !!!!</p>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/Sweet Child O-mine - Lanvollon 8 aout 2010.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Extrait enregistrement live à Lanvollon : Sweet child O mine"
              src="/sounds/Sweet Child O-mine - Lanvollon 8 aout 2010.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Extrait enregistrement live à Lanvollon : Sweet child O mine</figcaption>
        </figure>
        <div className="picture-to-open"><a href="/assets/historique/july and the clogs.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={July} alt="July and the Clogs" /></a></div>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/The Wall - Lanvollon 8 aout 2010.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Extrait enregistrement live à Lanvollon : The Wall"
              src="/sounds/The Wall - Lanvollon 8 aout 2010.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Extrait enregistrement live à Lanvollon : The Wall</figcaption>
        </figure>
        <h2 id="year-2011">2011</h2>
        <p>Intégration au groupe de bossa <strong>Recife</strong> : William Prigent <em>&#40;chant&#41;</em>, Wilhelm Damour <em>&#40;guitare&#41;</em> puis Manu Albert, Christian Harlé <em>&#40;piano&#41;</em>, Philippe Souquières <em>&#40;batterie, percussions&#41;</em>, Pierre Ducreux <em>&#40;Harmonica&#41;</em>, de nombreux concerts jusqu'en 2016.</p>
        <div className="picture-to-open"><a href="/assets/historique/recife.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={Recife} alt="Recife" /></a></div>
        <p>intégration au quintet de jazz : <strong>Les Amateurs</strong> : Christian Harlé <em>&#40;piano&#41;</em>, Wilhem Damour, Frank Alexis <em>&#40;bugle&#41;</em>, Laurent Le Poac <em>&#40;batterie&#41;</em>, qui a la particularité de jouer en duo, trio, quartet et quintet <em>&#40;Wilhem a laissé la place à Julien Bechen, puis à Christian Alexandre, puis à Franz Müllner&#41;</em>, groupe qui tourne toujours <em>&#40;<Link to={groupsUrl}>voir dans la partie groupe actuel</Link>&#41;</em>.</p>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/02 Red Clay.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Enregistrement CD Red Clay (2013) extrait Red Clay"
              src="/sounds/02 Red Clay.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Enregistrement CD Red Clay &#40;2013&#41; extrait Red Clay</figcaption>
        </figure>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/16 - St Eustache.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions={'Enregistrement Live à Loguivy de la Mer (2016) Saint Eustache, festival "L\'Appel du Loup"'}
              src="/sounds/16 - St Eustache.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Enregistrement Live à Loguivy de la Mer &#40;2016&#41; Saint Eustache, festival "L'Appel du Loup"</figcaption>
        </figure>
        <p>Création du trio  <strong>Jelly G</strong> : Lydia Domancich <em>&#40;piano&#41;</em>, Gérard Lhomme (batterie) de multiples concerts de 2011 à fin 2016.</p>
        <div className="picture-to-open"><a href="/assets/historique/Jelly G concert à L Ecoutille (Courtry 77)" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={Jelly} alt="Jelly G concert à L\'Ecoutille (Courtry 77)" /></a></div>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/01-Deluge.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Enregistrement live à Paimpol (La Sirène) 2016 Deluge"
              src="/sounds/01-Deluge.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Enregistrement live à Paimpol &#40;La Sirène&#41; 2016 Deluge</figcaption>
        </figure>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/06-The-Peacocks.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Enregistrement live à Paimpol (La Sirène) 2016 The Peacocks"
              src="/sounds/06-The-Peacocks.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Enregistrement live à Paimpol &#40;La Sirène&#41; 2016 The Peacocks</figcaption>
        </figure>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/10-For-djidji.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Enregistrement live à Paimpol (La Sirène) 2016 For Djidji"
              src="/sounds/10-For-djidji.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Enregistrement live à Paimpol &#40;La Sirène&#41; 2016 For Djidji</figcaption>
        </figure>
        <h2 id="year-2012">2012</h2>
        <p>Je rejoins le <strong>Cameron Trio</strong> composé de William Prigent <em>&#40;chant&#41;</em> et Manu Albert <em>&#40;guitare&#41;</em> qui continue en quartet avec Claude Tezza <em>&#40;guitare&#41;</em> et Franz Müllner <em>&#40;sax&#41;</em>. Voir dans la partie groupe actuel.</p>
        <div className="picture-to-open"><a href="/assets/historique/Cameron Trio.JPG" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={CameronTrio} alt="Cameron Trio" /></a></div>
        <p>J'accompagne durant l'été <strong>Robert Watson Wood</strong> avec Gérard Lhomme, blues du delta au menu !!!</p>
        <h2 id="year2014">2014</h2>
        <p><strong>Le trio Four and Six</strong> avec le guitariste Obé Kadima et le batteur Jean François Le Bras, qui deviendra Chapitre III <em>&#40;<Link to={groupsUrl}>voir dans la partie groupe actuel</Link>&#41;</em>.</p>
        <h2 id="year2015">2015</h2>
        <p>Création de Big The Band qui deviendra Transfer Unit <em>&#40;<Link to={groupsUrl}>voir dans la partie groupe actuel</Link>&#41;</em>.</p>
        <h2 id="year2019">2019</h2>
        <p>J'intègre je groupe Middle Jazz Quartet <em>&#40;<Link to={groupsUrl}>voir dans la partie groupe actuel</Link>&#41;</em>.</p>
      </div>
      <div className="other-bands">
        <h2>D'autres formations auxquelles j'ai collaboré</h2>
        <h3 id="year-1618">De 2016 à 2018</h3>
        <p><strong>Blue Up Sextet</strong> avec le trompettiste Marc Rosenfeld, le guitariste Jean Marie Le Callen, le saxophoniste Christian Alexandre, le batteur Joachim Mouflin , le tromboniste  Alexandre Bon, de nombreux concerts dans toute la Bretagne.</p>
        <div className="picture-to-open"><a href="/assets/historique/Blue up 6.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={BlueUp} alt="Blue Up 5" /></a></div>
        <h3 id="year-1720">De 2017 à 2020</h3>
        <p>Le Caroline Crozat Workshop avec Caroline <em>&#40;texte, chant, percussions, ...&#41;</em> deux périodes : la première avec Christian Harlé <em>&#40;piano&#41;</em> et  Christian Alexandre <em>&#40;sax&#41;</em>, concerts autour de Charlie Mingus avec des textes de Caroline, la deuxième en trio avec Christian Harlé : d'abord  en improvisation complète à partir d'un texte de Caroline et puis sur des thèmes de jazz chantés par Caroline.</p>
        <div className="picture-to-open"><a href="/assets/historique/Caroline Croizat Workshop.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={CCW} alt="Caroline Crozat Workshop" /></a></div>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/Angel-Eyes.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Enregistrement Caroline Crozat Workshop : Angel Eyes"
              src="/sounds/Angel-Eyes.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Enregistrement Caroline Crozat Workshop : Angel Eyes</figcaption>
        </figure>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/Triste.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Enregistrement Caroline Crozat Workshop : Triste"
              src="/sounds/Triste.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Enregistrement Caroline Crozat Workshop : Triste</figcaption>
        </figure>
        <p>Depuis 2019, je collabore aussi avec la chanteuse <strong>Linda Chabert</strong> : j'assure le remplacement de Gaël Kergadallan, son bassistes attitré, lors de ses indisponibilités.</p>
        <div className="picture-to-open"><a href="/assets/historique/Linda Chabert Quartet.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={LindaChabertQuartet} alt="Linda Chabert quartet " /></a></div>
        <div className="picture-to-open"><a href="/assets/historique/Linda Chabert Trio.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={LindaChabertTrio} alt="Linda Chabert trio" /></a></div>
        <h3 id="year-2020">2020</h3>
        <p>Création du <strong>Blue Moon Jazz Trio</strong> avec au chant <em>&#40;au mégaphone&#41;</em> et au sax soprano Franz Müllner, Claude Tezza à la guitare et au banjo , répertoire des années 20 à 40, déjà beaucoup de concerts , des enregistrements... <em>&#40;<Link to={groupsUrl}>voir dans la partie groupe actuel</Link>&#41;</em>.</p>
        <figure className="audio-embed">
          <audio
            controls
            src="/sounds/Blue Moon Jazz Trio-010.mp3"
            type="audio/mp3"
          >
            <track
              kind="captions"
              descriptions="Whispering entrgistré à la Sirène à Paimpol en mars 2021"
              src="/sounds/Blue Moon Jazz Trio-010.mp3"
              type="audio/mp3"
            />
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <figcaption>Whispering enregistré à la Sirène à Paimpol en mars 2021</figcaption>
        </figure>
        <div className="picture-to-open"><a href="/assets/historique/1.jpg" target="_blank"><img title="Cliquez pour ouvrir en grand dans un nouvel onglet" src={Photo1} alt="Blue Moon Jazz Trio" /></a></div>
      </div>
    </div>
  );
};

Historic.propTypes = {

};

Historic.defaultProps = {

};

// == Export
export default Historic;
