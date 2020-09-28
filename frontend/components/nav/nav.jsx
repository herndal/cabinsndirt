import React from 'react';
import { Link } from 'react-router-dom';

class navBase extends React.Component {

  sessionNav(){
    if (!this.props.loggedIn) {
      return (
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
          <button 
            className="demo-button"
            onClick={this.props.demo}
          >Demo User</button>
        </div>
      );
    } else {
      return (
        <div className="session-nav">
          <button
            className="demo-button"
            onClick={this.props.logout}
          >
            Log Out
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav">
        <Link to="/" className="logo-link">
          <h1>Cabins 'n Dirt</h1>
        </Link>
        <nav className="nav-links">
          <li className="top-links">
            <Link to="/">Near me</Link>
          </li>
          <li className="top-links">
            <Link to="/">About</Link>
          </li>
          {this.sessionNav()}
        </nav>
      </div>
    );
  }
}

// export const StickyNav = () => {
//   return (
//     <div className = "sticky-nav" >
//         <navBase />
//     </div >
//   );
// };

export default navBase;