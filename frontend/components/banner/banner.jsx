import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {


  render() {
    return (
      <>
        <Link to="/" className="logo-link">
          <h1>Cabins 'n Dirt</h1>
        </Link>
        <nav className="banner-nav">
          <Link to="/">Near me</Link>
          <Link to="/">About</Link>
          <button onClick={() => this.props.openModal('login')}>Log In</button>
          <button onClick={() => this.props.openModal('signup')}>Sign Up</button>
        </nav>
      </>
    )
  }
}

export default Banner;