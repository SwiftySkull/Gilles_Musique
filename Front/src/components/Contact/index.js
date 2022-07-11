// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import accueilPicture from 'src/assets/images/photo_gilles_accueil.jpg';

import './contact.scss';

// == Composant
const Contact = ({

}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="contact">
      <h1>Contactez-moi</h1>
      <div className="contact">
        <p style={{ marginBottom: '3rem' }}>Si vous souhaitez me contacter dans le cadre d'un concert, d'un événement :</p>
        <p style={{ marginBottom: '2rem' }}>Gilles FERLIER</p>
        <ul>
          <li>Portable : <a href="tel:+33615762817">06 15 76 28 17</a></li>
          <li>Fixe : <a href="tel:0296226859">02 96 22 68 59</a></li>
        </ul>
        <p style={{ marginBottom: '3rem' }}>Mail : <a href="mailto:gilles.ferlier@orange.fr">gilles.ferlier@orange.fr</a></p>
        <p>Pour les devis, me contacter, paiement en GUSO ou par contrat de cession ou d'association.</p>
      </div>
      <img src={accueilPicture} alt="Gilles, regard au loin, jouant de la contrebasse, noir et blanc" />
    </div>
  );
};

Contact.propTypes = {

};

Contact.defaultProps = {

};

// == Export
export default Contact;
