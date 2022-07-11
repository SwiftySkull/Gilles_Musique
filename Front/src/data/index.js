import bluemoon from 'src/assets/images/bluemoon.jpg';
import cameron from 'src/assets/images/cameron.jpg';
import middleJazz from 'src/assets/images/middle_jazz.jpg';
import chapitre3 from 'src/assets/images/chapitre3.jpg';
import transfertUnit from 'src/assets/images/transfertUnit.jpg';
import fb from 'src/assets/icones/fb.webp';
import insta from 'src/assets/icones/insta.webp';
import youtube from 'src/assets/icones/youtube.png';
import soundcloud from 'src/assets/icones/soundcloud.png';
import spotify from 'src/assets/icones/spotify.png';
import amateurs5 from 'src/assets/images/Groupes/amateurs5.jpg';
import amateurs2 from 'src/assets/images/Groupes/amateurs2.jpg';
import amateurs31 from 'src/assets/images/Groupes/amateurs3-1.jpg';
import amateurs32 from 'src/assets/images/Groupes/amateurs3-2.jpg';
import bluemoon1 from 'src/assets/images/Groupes/bluemoon1.jpg';
import chap31 from 'src/assets/images/Groupes/chap31.jpg';
import chap32 from 'src/assets/images/Groupes/chap32.jpg';
import transfertSB from 'src/assets/images/Groupes/transfertSB.jpg';
import transfertLb from 'src/assets/images/Groupes/transfertLb.jpg';
import transfertLlp from 'src/assets/images/Groupes/transfertLlp.jpg';

export const musicType = [
  {
    id: 1,
    name: 'YouTube',
  },
  {
    id: 2,
    name: 'SoundCloud',
  },
  {
    id: 3,
    name: 'CDPlayer',
  },
];

export const socialsType = [
  {
    id: 1,
    name: 'Instagram',
    picture: insta,
  },
  {
    id: 2,
    name: 'Facebook',
    picture: fb,
  },
  {
    id: 3,
    name: 'Youtube',
    picture: youtube,
  },
  {
    id: 4,
    name: 'SoundCloud',
    picture: soundcloud,
  },
  {
    id: 5,
    name: 'Spotify',
    picture: spotify,
  },
];

export const groups = [
  {
    id: 1,
    name: 'Les amateurs de Jazz 22',
    picture: amateurs5,
    bio: '<p>Fondé à Saint-Brieuc en juin 2006 par des passionnés de jazz, le groupe joue régulièrement dans les Côtes d\'Armor... dans les lieux ouverts à cette musique.</p><p>Initialement constitué de musiciens issus du département Jazz du Conservatoire de Saint Brieuc, créé et animé par deux figures du jazz costarmoricain Jean-Philippe Lavergne et Jean-Mathias Pétri, le groupe a évolué au fil des années.</p><p>Le groupe se produit en différente formule : duo, trio, quartet ou quintet.</p><br><h3>Le répertoire</h3><p>Le répertoire est composé d\'arrangements sur des « standards » très éclectiques de la période hard-bop, peu connus du grand public, composés par Benny Golson, Horace Silver ou Sam Rivers, sans oublier les grands noms du jazz.</p><p>En effet, au cours des sets, on pourra écouter des thèmes de Wayne Shorter, Herbie Hancock, Miles Davis, Charles Mingus ou dans un autre registre John Coltrane, Ornette Coleman ou Eric Dolphy.</p><p>Le top des compositeurs de jazz des années 50/60 !!!</p><br><p>Un voyage... entre amateurs... dans l\'histoire du jazz vous attend !!!</p>',
    contact: [
      {
        id: 1,
        name: 'Christian Harlé',
        tel: '06 78 62 40 10',
        mail: 'christian-harle@orange.fr',
      },
    ],
    photos: [
      {
        id: 1,
        title: 'Les Amateurs en quintet',
        content: '<p>Répétition à la Villa Carmélie à St Brieuc<p>',
        picture: amateurs5,
      },
      {
        id: 2,
        title: 'Les Amateurs en duo',
        content: '<p>Christian Harlé (piano) et Gilles Ferlier (contrebasse).</p><p>Pour vos concerts intimistes, pour les vernissages d\'expo, pour les lieux exigus.</p><p>Vernissage de l\'expo Denise Margoni le 08/04/2022 à la Halle à Paimpol</p>',
        picture: amateurs2,
      },
      {
        id: 3,
        title: 'Les Amateurs en trio (première possibilité)',
        content: '<p>Christian Harlé (piano), Gilles Ferlier (contrebasse), Laurent Le Poac (batterie)</p><p>Le Trio accompagnant Marc Villard (Polar et Jazz) le 10/03/2019 à Morieux dans le cadre de Choucroute et Papillon et le 22/10/2018 (noir sur la ville) à Langueux.</p>',
        picture: amateurs31,
      },
      {
        id: 4,
        title: 'Les Amateurs en trio (deuxième possibilité)',
        content: '<p>Christian Harlé (piano), Gilles Ferlier (contrebasse) et Franz Müllner (sax).</p><p>Concert au grand Hôtel de Port Blanc le 6 juin 2022.</p>',
        picture: amateurs32,
      },
      // {
      //   id: 5,
      //   title: 'Les Amateurs en quartet',
      //   content: '<p>Christian Harlé (piano), Gilles Ferlier (contrebasse), Laurent Le Poac (batterie) et Franz Müllner (sax).</p><p>Enregistrement live Yesterdays le 30/11/2018 à la Ville Bastard à St Brieuc</p>',
      //   picture: '',
      // },
    ],
    extract: [
      {
        id: 1,
        title: 'les amateurs Quartet (2019) - Medley with Nile\'s Blues in first !',
        link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/590544456&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        musicType: 2,
      },
      // {
      //   id: 2,
      //   title: 'les amateurs Quartet (2019) - Medley with Nile\'s Blues in first !',
      //   link: 'https://www.youtube.com/embed/kozyhFtE44k',
      //   musicType: 1,
      // },
    ],
    members: [
      'Christian Harlé : Piano',
      'Laurent Le Poac : Batterie',
      'Gilles Ferlier : Contrebasse',
      'Franz Müllner : Saxophones ténor et alto',
      'Franck Alexis : Bugle',
    ],
    socials: [
      {
        id: 1,
        socialType: 2,
        link: 'https://www.facebook.com/lesamateurs22jazz',
      },
      {
        id: 2,
        socialType: 4,
        link: 'https://soundcloud.com/lesamateurs22jazz',
      },
    ],
  },
  {
    id: 2,
    name: 'Blue Moon Jazz Trio/Quartet',
    picture: bluemoon,
    bio: '<h3>... de la légèreté festive à l\'émotion qui s\'amuse !</h3><p>Un répertoire bigarré de chansons des années 30 à 50, plein d\'énergie et de swing. Des standards immortalisés par Louis Armstrong, Sidney Bechet, Django Reinhardt, et bien d\'autres.</p><p><b>BLUE MOON JAZZ TRIO</b> est un trio acoustique créé en Juin 2020 à la sonorité originale. Du jazz comme on l\'aime !!!</p><br><h3>Franz Mullner</h3><p>Saxophoniste autodidacte, il joue de l\'alto, du ténor et du soprano, depuis des décennies, selon les formations dans lesquelles il intervient.</p><p>Il chante aussi bien en Français, qu\'en Anglais ou en Allemand, sa langue maternelle.</p><p>Venant d\'Aix/Marseille, il a de multiples participations groupales à son actif : Jazz, blues, chanson, performances solo, spectacles de poésie et de danse...</p><p>Nombreux concerts dans le sud, avec "Bluestream", quintette de blues et le Quartet de jazz "Patsy", Festival Musique dans la rue, Aix-en-Provence 2012, le Trio jazz New Orleans "Good News", participation au Vinômusic Festival 2019 au Domaine Terre de Mistral (13). Installation en Bretagne début 2020.</p><br><h3>Gilles Ferlier</h3><p>Après des expériences en free jazz dans les années 70, Gilles Ferlier, contrebassiste autodidacte, a joué, pendant 30 ans, des standards dans différentes formations, essentiellement en région parisienne, entre autre : le Serene Quartet (avec le saxophoniste Thierry Bruneau) avec notamment un concert lors du Nancy Jazz Pulsations en octobre 1980 , le Blue Train Quintet (avec le pianiste Bernard Mercier et le saxophoniste Stéphane Maggi) dans les années 80/90, disque : « 38000 pile » et au début des années 2000 le groupe Hiatus : concert au Petit Journal à Paris, un disque : « Même pas mal ».</p><p>Il s\'installe dans les Côtes d\'Armor en 2009, et rejoint des groupes aux styles différents : Helen and the Clogs (rock, pop, blues), Recife (bossa), et surtout jazz : les Amateurs, Blue Up, Transfer Unit, les trios Jelly G, Cameron et Four and Six.....Il a joué dans les différents festivals du Département : St Cast, Pléneuf, Langourla, St Quay, Paimpol/Lanloup, il multiplie les expériences musicales au sein de différentes formation allant du duo au septet.</p><br><h3>Claure Tezza</h3><p>Commence à étudier la guitare classique à 11ans, étudie en autodidacte le blues et le rock puis le jazz à l\'école de l\'AIMRA de Lyon (alors 2ème école de jazz après le CIM de Paris) où après l\'obtention de son diplôme il enseignera durant 12 année consécutives. Parallèlement, il travaille dans diverses formations allant de la variété au jazz moderne en passant par le New Orléans, le swing, la salsa ou la bossa nova, du duo au big band.</p><p>Il met son expérience au service de la pédagogie, titulaire d\'un Diplôme d\'État de Jazz, il enseigne dans plusieurs conservatoires et écoles de musiques de la région Rhône Alpes durant une trentaine d\'années. Il est également l\'auteur d\'une méthode de guitare: "Blues stick & Rock notes" en 3 volumes. Depuis une quinzaine d\'années il s\'intéresse à la mandoline, instrument sous exploité en France sur laquelle il transpose ses connaissances pour la faire évoluer vers un univers plus jazz notamment avec le "Mandolino swing trio".</p><p>Installé depuis 2019 dans les Côtes d\'Armor, il continue les rencontres musicales avec les musiciens locaux, Blue Moon, Cameron 4tet,Transfer Unit.</p>',
    contact: [],
    photos: [
      {
        id: 1,
        title: 'Oh Lady Be good',
        content: '<p>Enregistrement à la Sirène à Paimpol mars 2021<p>',
        picture: bluemoon1,
      },
    ],
    extract: [
      {
        id: 1,
        title: 'Blue Moon Jazz Trio @La Sirène - Paimpol',
        link: 'https://www.youtube.com/embed/kozyhFtE44k',
        musicType: 1,
      },
      {
        id: 2,
        title: 'les amateurs Quartet (2019) - Medley with Nile\'s Blues in first !',
        link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1041239992&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        musicType: 2,
      },
      // {
      //   id: 3,
      //   title: 'Bounce',
      //   link: '/sounds/Bounce.mp3',
      //   musicType: 3,
      // },
    ],
    members: [
      'Franz Müllner : Saxophone soprano, Chant au mégaphone',
      'Claude Tezza : Guitare, banjo et mandoline',
      'Gilles Ferlier : Contrebasse',
    ],
    socials: [
      {
        id: 2,
        socialType: 2,
        link: 'https://www.facebook.com/bluemoonjazztrio22',
      },
      {
        id: 3,
        socialType: 3,
        link: 'https://www.youtube.com/channel/UCD6KEZRVlgNd6HgFWvonFVA',
      },
      {
        id: 4,
        socialType: 4,
        link: 'https://www.soundcloud.com/bluemoonjazztrio',
      },

    ],
  },
  {
    id: 3,
    name: 'Cameron Quartet',
    picture: cameron,
    bio: '<p>Le  Cameron Quartet est un groupe de jazz créé en 2012, aujourd\'hui composé de <strong>William Prigent</strong> au chant et à la guitare accompagnement, de <strong>Claude Tezza</strong> à la guitare et à la mandoline et de <strong>Gilles Ferlier</strong> à la contrebasse, membres du Trio Cameron qui s\'est adjoint <strong>Franz Mullner</strong> aux saxophones depuis le printemps 2020. Quatre musiciens ayant arpenté les scènes  françaises  et multiplié les expériences musicales depuis les années 70.</p><p>Ils interprètent des adaptations de nombreuses mélodies  de jazz, de blues, de swing, de folk et de chansons françaises, de Duke Ellington à Sting en passant par Claude Nougaro, un répertoire dont l\'étendue et la diversité  sont  les principales caractéristiques, ce qui en fait  un quartet unique en son genre !!!</p><br><p>Le trio initial s\'est produit sur de nombreuses scènes bretonnes, on a pu l\'entendre dans le cadre des festivals de jazz  « l\'Appel du Loup » et « Jazz au château », au Casino de St Quay et dans de nombreux lieux entre Fréhel et Paimpol.</p><br><p>Le jeu et la complicité des musiciens qui mettent en valeur  la magnifique voix de WIlliam Prigent qui va alternativement passer du registre crooner à celui de bluesman ou de la bossa au folk !!!</p><br><p>Le jeu en quartet permet aussi d\'apprécier chaque musicien, de comprendre les interactions entre mélodie et harmonie, avec un seul but : faire plaisir au public tout en se faisant plaisir.</p>',
    contact: [],
    photos: [],
    extract: [
      // {
      //   id: 1,
      //   title: 'Bounce',
      //   link: '/sounds/Bounce.mp3',
      //   musicType: 3,
      // },
    ],
    members: [
      'William Prigent : Chant et Guitare accompagnement',
      'Claude Tezza : Guitare et Mandoline',
      'Gilles Ferlier : Contrebasse',
      'Franz Mullner : Saxophone',
    ],
    socials: [
      // {
      //   id: 1,
      //   socialType: 1,
      //   link: 'https://www.instagram.com/swiftyskull/?hl=fr',
      // },
    ],
  },
  {
    id: 4,
    name: 'Middle jazz Quartet',
    picture: middleJazz,
    bio: '<p>Quatre musiciens chevronnés  ayant joué dans de nombreux lieux connus du jazz costarmoricain : bars, clubs, cabarets, restaurants, casinos, ….ainsi que dans le cadre de plusieurs festivals : St Brieuc, St Cast, Jazz au Château à Tréveneuc, l\'Appel du Loup à Lanloup et Paimpol, voire hors du département : Vannes, Châteauneuf du Faou et même Nancy !!!</p><p>Par ailleurs ils assurent l\'animation musicale dans le cadre d\'événements pour les particuliers ou des associations.</p><p>Le répertoire du groupe est basé sur les standards tirés du répertoire de Broaday, Count Basie, Duke Ellington, la West Coast.</p>',
    contact: [
      {
        id: 1,
        name: 'Jacques Lacroix ',
        tel: '06 03 13 84 28',
        telbis: '09 77 78 64 36',
        mail: null,
      },
    ],
    photos: [],
    extract: [
      // {
      //   id: 1,
      //   title: 'Enregistrement le 13 janvier 2022 à Plérin',
      //   link: '/sounds/Bounce.mp3',
      //   musicType: 3,
      // },
    ],
    members: [
      'Bernard Le Goff : Saxophone',
      'Christian Harlé : Piano',
      'Jacques Lacroix : Batterie',
      'Gilles Ferlier : Contrebasse',
    ],
    socials: [
    ],
  },
  {
    id: 5,
    name: 'Chapitre III',
    picture: chapitre3,
    bio: '<p>Drôle de nom pour un trio de jazz, Chapitre III prend la relève de Four on Six.</p><p>Ce trio a connu deux formules autour du guitariste Obé Kadima, avec un répertoire basé, entr\'autres sur des thèmes de Wes Montgomery. Obé a changé d\'air, ses deux compères Jean François Le Bras (batterie) et Gilles Ferlier (contrebasse) se sont adjoints les compétences du pianiste Christian Harlé avec qui ils jouent par ailleurs au sein du sextet briochin Transfer Unit.</p><p>Un troisième chapitre s\'ouvre donc maintenant.</p><br><h3>A la batterie</h3><p>Jean François Le Bras : formation école Dante Agostini, Kenny Clark, puis cours privé avec Jean Paul Ceccarelli puis Armand Cavallaro. Classe de jazz au Conservatoire de St Brieuc. Depuis les années 70, participation dans des groupes de rock, jazz, free jazz et variété.</p><br><h3>Au piano</h3><p>Christian Harlé : pianiste classique et de jazz depuis quelques décennies, son étonnante culture musicale permet d\'enrichir l\'harmonie par des extensions et des contrepoints dont, seul, il a le secret...</p><br><h3>A la contrebasse</h3><p>Gilles Ferlier, guitariste  puis bassiste  entre la pop et le jazz rock de ses débuts, passe à la contrebasse à la fin des années 70. 40 ans de sideman dans de nombreuses formations jazz allant des standards les plus connus au free jazz  en passant par la bossa ou le blues… Avec son jeu simple et efficace, il apporte le soutien rythmique et harmonique permettant à ses compères de s\'exprimer très librement.</p><br><p>Les trois musiciens se connaissent très bien. Ce n\'est donc pas une rencontre fortuite mais plutôt une envie de jouer ensemble, à leur manière, des standards de jazz, de blues, …dans un climat « soft » permettant la complémentarité harmonique et rythmique de Christian et Gilles.</p><p>Les thèmes repris sont des standards du jazz, de Miles Davis à John Coltrane en passant par Benny Golson ou Wayne Shorter. L\'interprétation qu\'en fait le trio permet d\'en partager l\'essence, de faire vagabonder les sentiments au gré des improvisations permise par la richesse harmonique des différents morceaux.</p>',
    contact: [
      {
        id: 1,
        name: 'Gilles Ferlier',
        tel: '06 15 76 28 17',
        telbis: null,
        mail: null,
      },
    ],
    photos: [
      {
        id: 1,
        title: 'Jazz Ô Chateau 2019',
        content: '<p>Dans le cadre du festival du 7 au 12 mai 2019 à Saint-Quay-Portrieux',
        picture: chap31,
      },
      {
        id: 1,
        title: 'En studio d\'enregistrement',
        content: null,
        picture: chap32,
      },
    ],
    extract: [
      // {
      //   id: 1,
      //   title: 'Enregistrement le 13 janvier 2022 à Plérin',
      //   link: '/sounds/Bounce.mp3',
      //   musicType: 3,
      // },
    ],
    members: [
      'Jean François Le Bras : Batterie',
      'Christian Harlé : Piano',
      'Gilles Ferlier : Contrebasse',
    ],
    socials: [
    ],
  },
  {
    id: 6,
    name: 'Transfert Unit',
    picture: transfertUnit,
    bio: '<p>Tranfert Unit est un sextet briochin créé fin 2014, à la suite d\'un concert du trio Four and Six transformé en bœuf géant dans la grande tradition des jazzmen.</p><p>Composé du batteur Jean François Le Bras, du contrebassiste Gilles Ferlier, du  chanteur William Prigent, du pianiste Christian Harlé, de l\'accordéoniste Jacky Le Mée, après le départ du guitariste Obé Kadima, le groupe s\'est adjoint les services du guitariste Claude Tezza.</p><p>Le répertoire comporte des grands standards de jazz chantés, arrangés façon grand orchestre. Le quartet de base (basse, batterie, guitare, piano) enrichit des sonorités de l\'accordéon  de Jacky Le Mée, et de la voix de William Prigent , interprète des grands thèmes du jazz de Duke Ellington à John Coltrane en passant par Count Basie,  Miles Davis.</p><p>Transfert Unit apporte une touche swing intéressante. Les musiciens s\'en donnent à cœur joie pour que le public puisse apprécier chaque note, chaque phrase, chaque orchestration, la base du jazz, que du plaisir en quelque sorte !!!</p><p>Avant le COVID, le groupe se produisait dans de nombreux lieux des Côtes d\'Armor</p>',
    contact: [
      // {
      //   id: 1,
      //   name: 'Gilles Ferlier',
      //   tel: '06 15 76 28 17',
      //   telbis: null,
      //   mail: null,
      // },
    ],
    photos: [
      {
        id: 1,
        title: 'Concert à Saint-Brieuc',
        content: null,
        picture: transfertSB,
      },
      {
        id: 2,
        title: 'Concert à Lamballe',
        content: null,
        picture: transfertLb,
      },
      {
        id: 3,
        title: 'Concert à LanLoup',
        content: null,
        picture: transfertLlp,
      },
    ],
    extract: [
      // {
      //   id: 1,
      //   title: 'Enregistrement le 13 janvier 2022 à Plérin',
      //   link: '/sounds/Bounce.mp3',
      //   musicType: 3,
      // },
    ],
    members: [
      'Jean François Le Bras : Batterie',
      'Christian Harlé : Piano',
      'Gilles Ferlier : Contrebasse',
      'William Prigent : Chant',
      'Jacky Le Mée : Accordéon',
      'Obé Kadima : Guitare',
      'Claude Tezza : Guitare',
    ],
    socials: [
    ],
  },
];
