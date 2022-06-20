// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import

import './historic.scss';

// == Composant
const Historic = ({

}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="historic">
      Historic
    </div>
  );
};

Historic.propTypes = {

};

Historic.defaultProps = {

};

// == Export
export default Historic;
