import { connect } from 'react-redux';

import { loadLast } from 'src/actions/actuActions';

import Home from 'src/components/Home';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  lastNews: state.actu.lastNews,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Load the 3 last news */
  loadLast: () => {
    dispatch(loadLast());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Home);
