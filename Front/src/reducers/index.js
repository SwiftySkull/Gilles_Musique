import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import actuReducer from './actuReducer';

/**
 * Combine all reducers.
 */
const rootReducer = combineReducers({
  main: mainReducer,
  actu: actuReducer,
});

export default rootReducer;
