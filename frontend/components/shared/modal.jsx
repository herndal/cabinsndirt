import React from 'react';
import { 
  connect 
} from 'react-redux';
import { 
  closeModal 
} from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

class Modal extends React.Component {
  render() {
    if (!this.props.modal) return null;
    let component;
    let page = false;
    switch (this.props.modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      case 'signup-page':
        component = <SignupFormContainer />;
        page = true;
        break;
      default:
        return null;
    }
    return (
      <div className={page ? "modal-background page": "modal-background"}
        onClick={page ? null : this.props.closeModal}>
        <div className="modal-dialog"
          onClick={page ? null : e => e.stopPropagation()}>
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
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(mSTP, mDTP)(Modal)
