// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import

import './footer.scss';

import fb from 'src/assets/icones/fb.png';

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
          <a href="https://facebook.com/xxx" target="_blank" rel="noreferrer noopener"><img src={fb} alt="Facebook Link" /></a>
        </div>
        <p>LOGO</p>
      </div>
      <div className="copyright">
        Tous droits reservés - <a href="https://developoulpe.fr/" target="_blank" rel="noreferrer">DeveloPoulpe</a> 2022 &copy;
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
