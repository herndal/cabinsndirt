import { 
  RECEIVE_CURRENT_USER 
} from '../../actions/session_actions'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const user = { [action.currentUser.id]: action.currentUser };
      return Object.assign({}, state, user);
    default:
      return state;
  }
}