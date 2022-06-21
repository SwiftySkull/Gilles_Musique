import { connect } from 'react-redux';

import { changeMenu } from 'src/actions/mainActions';

import Header from 'src/components/Header';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  menuStatus: state.main.menuStatus,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Open/close the menu */
  changeMenu: () => {
    dispatch(changeMenu());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Header);
