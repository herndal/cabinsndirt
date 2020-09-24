import React from 'react';
import {
  // Route,
  // Redirect,
  Switch,
  Link,
  // HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Nav from './nav/nav_container';
import Modal from './modal';

export default () => (
  <div>
    <Modal />
    <header>
      <Nav />
    </header>
    <Switch>
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
  </div>
);