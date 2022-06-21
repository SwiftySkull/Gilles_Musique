import {
  CHANGE_MENU,
} from 'src/actions/mainActions';

const initialState = {
  menuStatus: false,
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MENU:
      return {
        ...state,
        menuStatus: !state.menuStatus,
      };

    default:
      return state;
  }
}

export default mainReducer;
