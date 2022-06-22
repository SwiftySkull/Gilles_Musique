// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import

import './footer.scss';

import fb from 'src/assets/icones/fb.webp';
import gilles from 'src/assets/images/gilles.jpg';

// == Composant
const Footer = ({

}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="footer">
      <div className="footer-elements">
        <div className="socials-link">
          <p>Retrouvez-moi sur :</p>
          <a href="https://www.facebook.com/gilles.ferlier" target="_blank" rel="noreferrer noopener"><img src={fb} alt="Facebook Link" /></a>
        </div>
        <Link to="/"><img src={gilles} alt="Logo" /></Link>
      </div>
      <div className="copyright">
        <p>Tous droits reservés - Gilles Ferlier 2022 &copy;</p>
        <a href="https://developoulpe.fr/" target="_blank" rel="noreferrer">DeveloPoulpe</a>
      </div>
    </div>
  );
};

Footer.propTypes = {

};

Footer.defaultProps = {

};

// == Export
export default Footer;
