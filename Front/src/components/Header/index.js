// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import

import './header.scss';

import {
  homeUrl,
  historicUrl,
  groupsUrl,
  actuUrl,
  contactUrl,
} from 'src/data/urls';

// == Composant
const Header = ({

}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="header">
      {/* <img src="" alt="Logo" /> */}
      <p>LOGO</p>
      <nav>
        <NavLink activeclassname="selected" to={homeUrl}>Accueil</NavLink>
        <NavLink activeclassname="selected" to={groupsUrl}>Groupes</NavLink>
        <NavLink activeclassname="selected" to={historicUrl}>Historique</NavLink>
        <NavLink activeclassname="selected" to={actuUrl}>Actualité</NavLink>
        <NavLink activeclassname="selected" to={contactUrl}>Contact</NavLink>
      </nav>
    </div>
  );
};

Header.propTypes = {

};

Header.defaultProps = {

};

// == Export
export default Header;
