import {
  RECEIVE_CURRENT_USER
} from '../../actions/session_actions'
import { 
  RECEIVE_SESSION_ERRORS,
  CLEAR_ERRORS 
} from '../../actions/error_actions'

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}