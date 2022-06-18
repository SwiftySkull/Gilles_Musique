import { connect } from 'react-redux';

import { loadTheActu } from 'src/actions/actuActions';

import OneActu from 'src/components/OneActu';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  theActu: state.actu.theActu,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Get and load the selected news
   *
   * @param {integer} id ID of the selected news
   */
  loadTheActu: (id) => {
    dispatch(loadTheActu(id));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(OneActu);
