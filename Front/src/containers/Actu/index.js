import { connect } from 'react-redux';

import { } from 'src/actions/mainActions';
import { loadAllActu } from 'src/actions/actuActions';

import Actu from 'src/components/Actu';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  allActu: state.actu.allActu,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Get and load all the news */
  loadAllActu: () => {
    dispatch(loadAllActu());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Actu);
