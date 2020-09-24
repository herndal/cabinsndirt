import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

  render() {
    return (
      <div className="nav-banner">
        <Link to="/" className="logo-link">
          <h1>Cabins 'n Dirt</h1>
        </Link>
        <nav className="nav">
          <li className="top-links">
            <Link to="/">Near me</Link>
          </li>
          <li className="top-links">
            <Link to="/">About</Link>
          </li>
          <div className="session-nav">
            <button
              className="session-button"
              onClick={() => this.props.openModal("login")}
            >
              Log In
            </button>
            <button
              className="session-button"
              onClick={() => this.props.openModal("signup")}
            >
              Sign Up
            </button>
            <button className="demo-button">Demo User</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Banner;