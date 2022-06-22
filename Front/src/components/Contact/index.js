// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import

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
        <p>Si vous souhaitez me contacter dans le cadre d'un concert, d'un événement :</p>
        <p>Téléphone : XXXXXXXXXX</p>
        <p>Mail : <a href="mailto:xxxxxxx@xxxx.xxx">xxxxxxx@xxxx.xxx</a></p>
      </div>
    </div>
  );
};

Contact.propTypes = {

};

Contact.defaultProps = {

};

// == Export
export default Contact;
