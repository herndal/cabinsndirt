import { NavLink } from 'react-router-dom';
import {
  UPDATE_BOUNDS
} from '../../actions/filter_actions'

export default (state = {bounds: {}}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case UPDATE_BOUNDS:
      return ({
        bounds: action.bounds
      })
    default:
      return state;
  }
}