import { 
  connect 
} from 'react-redux'
import { 
  openModal 
} from '../../actions/modal_actions'
import { 
  login, 
  logout 
} from '../../actions/session_actions'
import { 
  demoUser 
} from '../../util/api_util'
import Nav from './nav'

const stickyMSTP = state => ({
  loggedIn: Boolean(state.session.id),
  className: "sticky-nav"
})

const scrollMSTP = state => ({
  loggedIn: Boolean(state.session.id),
  className: "scroll-nav"
})

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
  demo: () => dispatch(login(demoUser))
})

export const StickyNav = connect(stickyMSTP, mDTP)(Nav)
export const ScrollNav = connect(scrollMSTP, mDTP)(Nav)