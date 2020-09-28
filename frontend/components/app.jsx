import React from 'react';
import {
  Route,
  // Redirect,
  Switch,
  // Link,
  // HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Login from './session/login_page';
import Signup from './session/signup_background_container';
import StickyNav from './nav/nav_container';
import Modal from './modal';
import Splash from './splash/splash';

export default () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/signup" component={Signup} />
      <Route path="/" component={StickyNav} />
    </Switch>
    <AuthRoute exact path="/login" component={Login} />
    <Route exact path="/" component={Splash} />
  </div>
);