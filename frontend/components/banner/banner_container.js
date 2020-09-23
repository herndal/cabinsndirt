import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Banner from './banner';

const mSTP = state => {
  return {
  };
};

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Banner);