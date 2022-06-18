/* eslint-disable no-console */
import axios from 'axios';

import {
  LOAD_ALL_ACTU,
  saveAllActu,
  LOAD_THE_ACTU,
  saveTheActu,
  LOAD_LAST,
  saveLast,
} from 'src/actions/actuActions';

// URL for the Axios requests
import { URL } from 'src/middleWares/mainMiddleware';

/**
 * MiddleWare for the main and authentification area.
 */
const actuMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    /** Load all the news and save them */
    case LOAD_ALL_ACTU:
      axios.get(`${URL}/all`)
        .then((response) => {
          store.dispatch(saveAllActu(response.data.actus));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    /** Load and save the info of a specific news */
    case LOAD_THE_ACTU:
      axios.get(`${URL}/single/${action.id}`)
        .then((response) => {
          store.dispatch(saveTheActu(response.data.actu));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    /** Load and save the 3 latest news */
    case LOAD_LAST:
      axios.get(`${URL}/last`)
        .then((response) => {
          store.dispatch(saveLast(response.data.actus));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    // Default action.
    default:
      next(action);
  }
};

export default actuMiddleware;
