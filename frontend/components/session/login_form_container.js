import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    names: false,
    errors: errors.session,
    formType: 'Log In',
    formButton: 'Sign in with your email address',
    formHeader: 'Welcome back!',
    formSubHeader: 'Let\'s get you outside.',
    navLinkMessage: 'Don\'t have a Cabins \'n Dirt account?',
  };
};

const mDTP = dispatch => {
  return {
    action: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    altSession: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Sign up!
      </button>
    )
  };
};

export default connect(mSTP, mDTP)(SessionForm);