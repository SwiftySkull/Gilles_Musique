// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import

import './header.scss';

import gilles from 'src/assets/images/gilles.jpg';

import {
  homeUrl,
  historicUrl,
  groupsUrl,
  actuUrl,
  contactUrl,
} from 'src/data/urls';

// == Composant
const Header = ({
  menuStatus,
  changeMenu,
}) => {
  useEffect(() => {

  }, []);

  function menuByKey(params) {
    if (params.key === 'Enter') {
      changeMenu();
    }
  }

  return (
    <div id="header">
      <img src={gilles} alt="Logo" />
      {/* <p>Gilles Ferlier</p> */}
      <nav className="nav-big">
        <NavLink activeclassname="selected" to={homeUrl}>Accueil</NavLink>
        <NavLink activeclassname="selected" to={actuUrl}>Actualités</NavLink>
        <NavLink activeclassname="selected" to={groupsUrl}>Groupes</NavLink>
        <NavLink activeclassname="selected" to={contactUrl}>Contact</NavLink>
        {/* <NavLink activeclassname="selected" to={historicUrl}>Historique</NavLink> */}
      </nav>
      <div className="container-small">
        <nav className={menuStatus ? 'nav-small' : 'nav-small close-nav'}>
          <NavLink activeclassname="selected" to={homeUrl}>Accueil</NavLink>
          <NavLink activeclassname="selected" to={actuUrl}>Actualités</NavLink>
          <NavLink activeclassname="selected" to={groupsUrl}>Groupes</NavLink>
          <NavLink activeclassname="selected" to={contactUrl}>Contact</NavLink>
          {/* <NavLink activeclassname="selected" to={historicUrl}>Historique</NavLink> */}
        </nav>
        <div className={!menuStatus ? 'menu open-menu' : 'menu close-menu'} tabIndex="0" onKeyDown={(evt) => menuByKey(evt)} onClick={() => changeMenu()}>
          <div className="bar first-bar" />
          <div className="bar second-bar" />
          <div className="bar third-bar" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  menuStatus: PropTypes.bool.isRequired,
  changeMenu: PropTypes.func.isRequired,
};

Header.defaultProps = {

};

// == Export
export default Header;
