import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainMiddleware from 'src/middleWares/mainMiddleware';
import actuMiddleware from 'src/middleWares/actuMiddleware';

import reducer from 'src/reducers';

/**
 * Combine all the MiddleWares.
 */
const enhancers = composeWithDevTools(
  applyMiddleware(
    mainMiddleware,
    actuMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
