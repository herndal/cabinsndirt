import React from 'react';
import {
  Route,
  // Redirect,
  Switch,
  // Link,
  // HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session/login_form_container';
import SignupBackgroundContainer from './session/signup_background_container';
import Nav from './nav/nav_container';
import Modal from './modal';

export default () => (
  <div>
    <Modal />
    <header>
      <Switch>
        <AuthRoute exact path="/signup" component={SignupBackgroundContainer} />
        <Route path="/" component={Nav} />
      </Switch>
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
  </div>
);