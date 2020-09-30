import React from 'react'
import {
  Route,
  // Redirect,
  Switch,
  // Link,
  // HashRouter
} from 'react-router-dom'
import { 
  AuthRoute, 
  ProtectedRoute 
} from '../util/route_util'
import Splash from './splash/splash'
import Discover from './discover/discover_container'
import Login from './session/login_page'
import Signup from './session/signup_background_container'
import Modal from './shared/modal'
import Footer from './shared/footer'
import {
  StickyNav,
  ScrollNav
} from './nav/nav_container'

export default () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/signup" component={Signup} />
      <Route exact path="/" component={StickyNav} />
      <Route path="/" component={ScrollNav} />
    </Switch>
    <AuthRoute exact path="/login" component={Login} />
    <Route exact path="/" component={Splash} />
    <Route path="/discover" component={Discover} />
    <Footer />
  </div>
)