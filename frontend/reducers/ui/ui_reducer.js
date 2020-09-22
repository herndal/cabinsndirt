import { APPLY_SIGNUP_FORM, APPLY_LOGIN_FORM } from "../../actions/session_actions";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case APPLY_SIGNUP_FORM:
      return { modal: "signup" };

    case APPLY_LOGIN_FORM:
      return { modal: "login" };

    default:
      return state;
  }
}