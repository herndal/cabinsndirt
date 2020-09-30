import {
  connect
} from 'react-redux'
import Discover from './discover'
import {
  getLocations
} from '../../actions/location_actions'

const mSTP = state => ({
  locations: Object.values(state.entities.locations)
})

const mDTP = dispatch => ({
  getLocations: () => dispatch(getLocations())
})

export default connect(mSTP, mDTP)(Discover)