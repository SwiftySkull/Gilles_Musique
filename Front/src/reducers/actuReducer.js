import {
  SAVE_ALL_ACTU,
  SAVE_THE_ACTU,
  SAVE_LAST,
} from 'src/actions/actuActions';

const initialState = {
  allActu: [],
  theActu: {},
  lastNews: [],
};

/**
 * Reducer for the main events.
 */
function actuReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_LAST:
      return {
        ...state,
        lastNews: action.lastNews,
      };

    case SAVE_THE_ACTU:
      return {
        ...state,
        theActu: action.actu,
      };

    /** Save all the news */
    case SAVE_ALL_ACTU:
      return {
        ...state,
        allActu: action.actus,
      };

    default:
      return state;
  }
}

export default actuReducer;
