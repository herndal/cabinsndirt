import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Nav from './nav';

const mSTP = state => {
  return {
  };
};

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Nav);