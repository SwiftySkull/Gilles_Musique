// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './actu.scss';

import { pictureUrl, actuUrl } from 'src/data/urls';
import { stringToUrl, formatDate } from 'src/utils';

// == Composant
/**
 * Component to list all the news
 *
 * @param {array} allActu The list of all news
 * @param {function} loadAllActu Get and load all the news
 */
const Actu = ({
  allActu,
  loadAllActu,
}) => {
  useEffect(() => {
    loadAllActu();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="actu">
      <h1>Actualités</h1>
      <div className="actu">
        {allActu.map((act) => (
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

Actu.propTypes = {
  /** The list of all news */
  allActu: PropTypes.array.isRequired,
  /** Get and load all the news */
  loadAllActu: PropTypes.func.isRequired,
};

Actu.defaultProps = {

};

// == Export
export default Actu;
