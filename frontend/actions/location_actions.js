import {
  fetchLocation,
  fetchLocations
} from "../util/api_util"
import {
  receiveLocationErrors
} from './error_actions'

export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS"
export const RECEIVE_LOCATION = "RECEIVE_LOCATION"

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
})

export const receiveLocation = location => ({
  type: RECEIVE_LOCATION,
  location
})

export const getLocations = () => dispatch => (
  fetchLocations())
  .then( locs => (
      dispatch(receiveLocations(locs))
    ), err => (
      dispatch(receiveLocationErrors(err.responseJSON))
    )
)

export const getLocation = id => dispatch => (
  fetchLocation(id))
  .then( loc => (
      dispatch(receiveLocation(loc))
    ), err => (
      dispatch(receiveLocationErrors(err.responseJSON))
    )
)