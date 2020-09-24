import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.names) {
      this.state = {
        fname: '',
        lname: '',
        zipcode: '',
        email: '',
        password: '',
        focus: false
      };
    } else {
      this.state = {
        email: '',
        password: '',
        focus: false
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addFocus = this.addFocus.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(this.props.closeModal, 'Submission Failure');
  }

  names() {
    if (this.props.names) {
      return (
        <div className="names">
          <input type="text"
            value={this.state.fname}
            onChange={this.update("fname")}
            className="session-input fname"
            placeholder="First name"
          />
          <input type="text"
            value={this.state.lname}
            onChange={this.update("lname")}
            className="session-input name"
            placeholder="Last name"
          />
        </div>
      );
    }
  }

  zip() {
    if (this.props.names) {
      return (
        <div className="zip">
            <input type="text"
              value={this.state.zipcode}
              onChange={this.update("zipcode")}
              className="session-input"
              placeholder="Zip code"
            />
        </div>
      )
    }
  }

  errors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            <p className="session-error">{error}</p>
          </li>
        ))}
      </ul>
    );
  }

  formButton() {
    if (!this.state.focus) {
      return (
        <button
          className="session-form-button"
          onClick={this.addFocus}
        >
        {this.props.formButton}
        </button>
      )
    }
  }

  sessionForm() {
    if (this.state.focus) {
      return (
        <form onSubmit={this.handleSubmit} className="session-form">
          {this.errors()}
          {this.names()}
          <input type="email"
            value={this.state.email}
            onChange={this.update('email')}
            className="session-input"
            placeholder="Email address"
          />
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="session-input"
            placeholder={this.props.names ? "Create a password" : "Password"}
          />
          {this.zip()}
          <br/>
          <input
            className={ this.props.names ? "session-submit signup" : "session-submit"}
            type="submit"
            value={this.props.formType}
          />
        </form>
      )
    }
  }

  addFocus() {
    this.setState({
      focus: true
    })
  }

  strike() {
    if (!this.state.focus || !this.props.names) {
      return (
        <div className="strike">
          <span>
            <FontAwesomeIcon icon={faCampground} />
          </span>
        </div>
      )
    } else {
      return (
        <br/>
      )
    }
  }

  render() {
    return (
      <div className="session-modal">
        <div className="modal-body">
          <big className="session-form-header">
            {this.props.formHeader}
            <small className="session-form-subheader">
              {this.props.formSubHeader}
            </small>
          </big>
          {this.strike()}
          {this.formButton()}
          {this.sessionForm()}
        </div>
        <div className="modal-footer">
          {this.props.navLinkMessage}
          {this.props.altSession}
        </div>
      </div>
    );
  }
}

export default SessionForm;