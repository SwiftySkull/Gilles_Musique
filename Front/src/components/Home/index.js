/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import

import './home.scss';

import { pictureUrl, actuUrl } from 'src/data/urls';
import { stringToUrl, formatDate } from 'src/utils';

// == Composant
/**
 *
 * @param {function} loadLast Load the 3 last news
 * @param {array} lastNews Array of the 3 lastest news
 */
const Home = ({
  loadLast,
  lastNews,
}) => {
  useEffect(() => {
    loadLast();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="home">
      <h1>Accueil</h1>
      <div className="presentation">
        <h2>Bonjour c'est Gilles !</h2>
        <div className="bio">
          <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>
          <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</p>
          <p>Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.</p>
        </div>
      </div>
      <div className="actu">
        <h2>Denières Actualités</h2>
        {lastNews.map((act) => (
          <div className="vignette" key={act.id}>
            <div className="picture"><Link to={`${actuUrl}/${stringToUrl(act.title)}/${act.id}`}><img src={pictureUrl + act.picture} alt={act.title} /></Link></div>
            <div className="infos">
              <p className="date">{formatDate(act.date)}</p>
              <p className="date">{act.musicGroup?.name}</p>
              <Link to={`${actuUrl}/${stringToUrl(act.title)}/${act.id}`} className="title">{act.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  /** Load the 3 last news */
  loadLast: PropTypes.func.isRequired,
  /** Array of the 3 lastest news */
  lastNews: PropTypes.array.isRequired,
};

Home.defaultProps = {

};

// == Export
export default Home;
