import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

class SignupBackground extends React.Component {
  componentDidMount() {
    this.props.openModal();
  }
  render() {
    return (
      <div>
        {this.props.login}
      </div>
    )
  }
}

const mSTP = state => ({})

const mDTP = (dispatch) => ({
  login: <Link to="/login"
    className='login-button'
    >Log in</Link>,
  openModal: () => dispatch(openModal('signup-page'))
});

export default connect(mSTP, mDTP)(SignupBackground);