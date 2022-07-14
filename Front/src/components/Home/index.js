/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import accueilPicture from 'src/assets/images/photo_gilles_accueil.jpg';

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
        <h2>Bonjour à toutes et à tous !</h2>
        <div className="bio">
          <div>
            <p>Depuis une cinquantaine d'années la contrebasse est devenue une partenaire incontournable, elle accompagne ma vie de musicien et m'a apporté beaucoup de satisfaction.</p>
          </div>
          <div>
            <p>Autodidacte, j'ai eu le plaisir de jouer, d'accompagner de nombreux musiciens, chanteurs, chanteuses, d'abord en région parisienne puis en Bretagne depuis 2009.</p>
            <p>Ces rencontres, ces partages m'ont permis d'affiner mon jeu, d'étendre connaissance et pratique du jazz allant maintenant du new orleans au free jazz au gré des groupes dans lesquels je me produis.</p>
          </div>
          <div>
            <p>Ce site vous permet d'avoir une vue d'ensemble des différentes formations dans lesquelles j'interviens, l'actualité des concerts, l'historique des groupes.</p>
            <p>Ainsi, vous pourrez aisément voir des affiches, des photos et écouter des extraits d'enregistrement en concert live, en studio, .... cela vous donnera des indications sur le type de jazz et de formation (du duo au sextet) dont vous souhaiteriez vous attacher les services.</p>
          </div>
        </div>
        <img src={accueilPicture} alt="Gilles, regard au loin, jouant de la contrebasse, noir et blanc" />
      </div>
      <div className="actu">
        <h2>Dernières Actualités</h2>
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
