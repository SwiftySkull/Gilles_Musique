// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import

import './error.scss';

// == Composant
const Error = ({

}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="error">
      Error
    </div>
  );
};

Error.propTypes = {

};

Error.defaultProps = {

};

// == Export
export default Error;
