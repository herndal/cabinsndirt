import {
  RECEIVE_LOCATIONS,
  RECEIVE_LOCATION
} from '../../actions/location_actions'

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LOCATION:
      const loc = { [action.location.id]: action.location };
      return Object.assign({}, state, loc);
    case RECEIVE_LOCATIONS:
      return action.locations;
    default:
      return state;
  }
}