import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
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
    navLink: <Link to="/signup">Sign up!</Link>,
  };
};

const mDTP = dispatch => {
  return {
    action: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm);
