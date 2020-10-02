import {
  getLocations
} from './location_actions'

export const UPDATE_BOUNDS = "UPDATE_BOUNDS"

const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
})

export const updateMap = bounds => (dispatch, getState) => {
  dispatch(updateBounds(bounds));
  getLocations(getState().ui.filters)(dispatch);
}





// export function updateFilter(filter, value) {
//   return (dispatch, getState) => {
//     dispatch(changeFilter(filter, value));
//     return fetchBenches(getState().filters)(dispatch);
//     // delicious curry!
//   };
// }