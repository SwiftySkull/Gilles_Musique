// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'moment';

// == Import
import './actu.scss';

import { pictureUrl, actuUrl } from 'src/data/urls';
import { stringToUrl } from 'src/utils';

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
  }, []);

  function formatDate(date) {
    // Moment(date).locale().format('DD MMMM YYYY');

    // console.log(Moment(date).format('DD MMMM YYYY à HH:mm'));
    Moment.locale('fr');
    // console.log(Moment(date).format('DD MMMM YYYY à HH:mm'));
    return Moment(date).format('DD MMMM YYYY à HH:mm');
  }

  return (
    <div id="actu">
      <h1>Actualités</h1>
      <div className="actu">
        {allActu.map((act) => (
          <div className="vignette" key={act.id}>
            <div className="picture"><Link to={`${actuUrl}/${stringToUrl(act.title)}/${act.id}`}><img src={pictureUrl + act.picture} alt={act.title} /></Link></div>
            <div className="infos">
              <p className="date">{formatDate(act.date)}</p>
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
