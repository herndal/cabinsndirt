import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    names: true,
    errors: errors.session,
    formType: 'Join Cabins \'n Dirt',
    formButton: ' Sign up with your email address ',
    formHeader: 'Join Cabins \'n Dirt',
    formSubHeader: 'Discover the best camping near me',
    navLinkMessage: 'Have an account?',
  };
};

const mDTP = dispatch => {
  return {
    action: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    altSession: (
      <strong className="alt-session">
        <button onClick={() => dispatch(openModal("login"))}>Sign in</button>
      </strong>
    ),
  };
};

export default connect(mSTP, mDTP)(SessionForm);