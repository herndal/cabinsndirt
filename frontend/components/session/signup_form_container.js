import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    names: true,
    errors: errors.session,
    formType: 'Join Cabins \'n Dirt',
    formButton: 'Sign up with your email address',
    formHeader: 'Join Hipcamp',
    formSubHeader: 'Discover the best camping near me',
    navLinkMessage: 'Have an account?',
    navLink: <Link to="/login">Sign in</Link>,
  };
};

const mDTP = dispatch => {
  return {
    action: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm);
