import {
  RECEIVE_LOCATIONS,
  RECEIVE_LOCATION
} from '../../actions/location_actions'
import {
  RECEIVE_LOCATION_ERRORS,
  CLEAR_ERRORS
} from '../../actions/error_actions'

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_LOCATION_ERRORS:
      return action.errors;
    case RECEIVE_LOCATIONS:
      return [];
    case RECEIVE_LOCATION:
      return [];
    default:
      return state;
  }
}