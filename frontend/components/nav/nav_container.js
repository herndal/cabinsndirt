import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { login, logout } from '../../actions/session_actions';
import { demoUser } from '../../util/api_util';
import Nav from './nav';

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id),
});

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
  demo: () => dispatch(login(demoUser))
});

export default connect(mSTP, mDTP)(Nav);