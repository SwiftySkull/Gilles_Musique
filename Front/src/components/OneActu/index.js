// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Moment from 'moment';

// == Import
import './oneActu.scss';

import { pictureUrl, actuUrl } from 'src/data/urls';
import { createMarkup } from 'src/utils';

// == Composant
/**
 * Component to list all the news
 *
 * @param {object} theActu The informations of the news
 * @param {function} loadTheActu Get and load the selected news
 */
const OneActu = ({
  theActu,
  loadTheActu,
}) => {
  const { id } = useParams();

  useEffect(() => {
    loadTheActu(id);
  }, []);

  function formatDate(date) {
    // Moment(date).locale().format('DD MMMM YYYY');

    // console.log(Moment(date).format('DD MMMM YYYY à HH:mm'));
    Moment.locale('fr');
    // console.log(Moment(date).format('DD MMMM YYYY à HH:mm'));
    return Moment(date).format('DD MMMM YYYY à HH:mm');
  }

  return (
    <div id="oneActu">
      <h1>{theActu.title ?? 'Chargement en cours...'}</h1>
      <div className="oneActu">
        <div className="vignette">
          <div className="picture"><img src={pictureUrl + theActu.picture} alt={theActu.title} /></div>
          {/* <div className="infos"> */}
          <p className="date">{formatDate(theActu.date)}</p>
          <div className="content" dangerouslySetInnerHTML={createMarkup(theActu.content)} />
          {/* </div> */}
        </div>
      </div>
      <div className="back-link">
        <Link className="back-to-list" to={actuUrl}><button type="button">Retour à la liste des actualités</button></Link>
      </div>
    </div>
  );
};

OneActu.propTypes = {
  /** The informations of the news */
  theActu: PropTypes.object.isRequired,
  /** Get and load the selected news */
  loadTheActu: PropTypes.func.isRequired,
};

OneActu.defaultProps = {

};

// == Export
export default OneActu;
