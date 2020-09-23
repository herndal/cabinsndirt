import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

class Modal extends React.Component {
  render() {
    if (!this.props.modal) return null;
    let component;
    switch (this.props.modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            {component}
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);
