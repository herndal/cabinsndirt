import React, { useEffect } from 'react';
import SignupForm from './signup_form_container';
import { Link } from "react-router-dom";

export default ({modal, openModal, closeModal}) => {

  useEffect(() => {
    openModal();

    return () => {
      closeModal();
    }
  }, [modal])

  return (
    <div className="signup-main">
      <Link to="/login">Log in</Link>
    </div>
  )
}