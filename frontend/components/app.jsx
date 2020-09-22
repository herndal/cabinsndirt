import React from 'react';
import {
  // Route,
  // Redirect,
  Switch,
  Link,
  // HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';

export default () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Cabins 'n Dirt</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);