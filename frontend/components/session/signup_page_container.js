import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import SignupPage from "./signup_page";

const mSTP = ({ui}) => {
  return {
    modal: ui.modal
  };
};

const mDTP = (dispatch) => {
  return {
    openModal: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(SignupPage);
