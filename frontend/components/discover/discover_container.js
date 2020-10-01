import {
  connect
} from 'react-redux'
import Discover from './discover'
import {
  updateMap
} from '../../actions/filter_actions'

const mSTP = state => ({
  locations: Object.values(state.entities.locations),
  filters: state.ui.filters
})

const mDTP = dispatch => ({
  getLocations: (filters) => dispatch(getLocations(filters)),
  updateMap: (bounds) => dispatch(updateMap(bounds))
})

export default connect(mSTP, mDTP)(Discover)