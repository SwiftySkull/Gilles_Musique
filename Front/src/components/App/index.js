// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

// == Import
import Actu from 'src/containers/Actu';
import Contact from 'src/containers/Contact';
import Error from 'src/containers/Error';
import Footer from 'src/containers/Footer';
import Groups from 'src/containers/Groups';
import Header from 'src/containers/Header';
import Historic from 'src/containers/Historic';
import Home from 'src/containers/Home';
import OneActu from 'src/containers/OneActu';
import OneGroup from 'src/containers/OneGroup';

import './app.scss';

import {
  homeUrl,
  historicUrl,
  groupsUrl,
  actuUrl,
  contactUrl,
} from 'src/data/urls';

// == Composant
const App = ({

}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // document.title = 'Gilles';

  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path={`${actuUrl}/:nom/:id`} element={<OneActu />} />
        <Route path={`${groupsUrl}/:nom/:id`} element={<OneGroup />} />
        <Route path={actuUrl} element={<Actu />} />
        <Route path={contactUrl} element={<Contact />} />
        {/* <Route path={historicUrl} element={<Historic />} /> */}
        <Route path={groupsUrl} element={<Groups />} />
        <Route path={homeUrl} element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

App.propTypes = {

};

App.defaultProps = {

};

// == Export
export default App;
