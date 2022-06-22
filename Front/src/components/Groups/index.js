// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import

import './groups.scss';

import { groups } from 'src/data';
import { groupsUrl } from 'src/data/urls';
import { stringToUrl } from 'src/utils';

// == Composant
const Groups = ({

}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="groups">
      <h1>Groupes actuels</h1>
      <h2>Voici les {groups.length} groupes dans lesquels je me produis actuellement</h2>
      <div className="groups">
        {groups.map((group) => (
          <div className="one-group" key={group.id}>
            <div className="picture">
              <Link to={`${groupsUrl}/${stringToUrl(group.name)}/${group.id}`}>
                <img src={group.picture} alt={group.name} />
              </Link>
              <h3><Link to={`${groupsUrl}/${stringToUrl(group.name)}/${group.id}`}>{group.name}</Link></h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Groups.propTypes = {

};

Groups.defaultProps = {

};

// == Export
export default Groups;
