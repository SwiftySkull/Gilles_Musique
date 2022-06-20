import bluemoon from 'src/assets/images/bluemoon.jpg';
import cameron from 'src/assets/images/cameron.jpg';
import fb from 'src/assets/icones/fb.webp';
import insta from 'src/assets/icones/insta.webp';
import youtube from 'src/assets/icones/youtube.png';
import soundcloud from 'src/assets/icones/soundcloud.png';
import spotify from 'src/assets/icones/spotify.png';

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
    picture: 'https://i1.sndcdn.com/avatars-000597305451-qr614r-t200x200.jpg',
    bio: null,
    extract: [
      {
        id: 1,
        title: 'les amateurs Quartet (2019) - Medley with Nile\'s Blues in first !',
        link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/590544456&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        musicType: 2,
      },
      {
        id: 2,
        title: 'les amateurs Quartet (2019) - Medley with Nile\'s Blues in first !',
        link: 'https://www.youtube.com/embed/kozyhFtE44k',
        musicType: 1,
      },
    ],
    members: [
      'Monsieur X',
      'Gilles',
      'Monsieur Y',
      'Monsieur Z',
    ],
    socials: [
      {
        id: 1,
        socialType: 1,
        link: 'https://www.instagram.com/swiftyskull/?hl=fr',
      },
    ],
  },
  {
    id: 2,
    name: 'Blue Moon Jazz Trio/Quartet',
    picture: bluemoon,
    bio: '<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p><p> The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>',
    extract: [
      {
        id: 1,
        title: 'les amateurs Quartet (2019) - Medley with Nile\'s Blues in first !',
        link: 'https://www.youtube.com/embed/kozyhFtE44k',
        musicType: 1,
      },
      {
        id: 2,
        title: 'les amateurs Quartet (2019) - Medley with Nile\'s Blues in first !',
        link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/590544456&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        musicType: 2,
      },
      {
        id: 3,
        title: 'Bounce',
        link: '/sounds/Bounce.mp3',
        musicType: 3,
      },
    ],
    members: [
      'Monsieur X',
      'Gilles',
      'Monsieur Y',
      'Monsieur Z',
    ],
    socials: [
      {
        id: 1,
        socialType: 1,
        link: 'https://www.instagram.com/swiftyskull/?hl=fr',
      },
      {
        id: 2,
        socialType: 2,
        link: 'https://www.facebook.com/Swift741',
      },
      {
        id: 3,
        socialType: 3,
        link: 'https://www.youtube.com/channel/UCD6KEZRVlgNd6HgFWvonFVA',
      },
      {
        id: 4,
        socialType: 4,
        link: 'https://soundcloud.com/lesamateurs22jazz',
      },
      {
        id: 5,
        socialType: 5,
        link: 'https://open.spotify.com/album/27Ro0Crc9qUOavE2QJeTL9',
      },
    ],
  },
  {
    id: 3,
    name: 'Cameron Quartet',
    picture: cameron,
    bio: null,
    extract: [
      {
        id: 1,
        title: 'Bounce',
        link: '/sounds/Bounce.mp3',
        musicType: 3,
      },
    ],
    members: [
      'Monsieur X',
      'Gilles',
      'Monsieur Y',
      'Monsieur Z',
    ],
    socials: [
      {
        id: 1,
        socialType: 1,
        link: 'https://www.instagram.com/swiftyskull/?hl=fr',
      },
    ],
  },
  {
    id: 4,
    name: 'Middle jazz Quartet',
    picture: 'https://picsum.photos/id/237/200/300',
    bio: null,
    extract: [
      {
        id: 1,
        title: 'Bounce',
        link: '/sounds/Bounce.mp3',
        musicType: 3,
      },
    ],
    members: [
      'Monsieur X',
      'Gilles',
      'Monsieur Y',
      'Monsieur Z',
    ],
    socials: [
    ],
  },
];
