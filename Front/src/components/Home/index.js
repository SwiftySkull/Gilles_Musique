// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'moment';

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
      <h1>Home</h1>
      <div>
        <h2>Coucou c'est moi !</h2>
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
