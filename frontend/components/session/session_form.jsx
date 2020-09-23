import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.names) {
      this.state = {
        fname: '',
        lname: '',
        zipcode: '',
        email: '',
        password: ''
      };
    } else {
      this.state = {
        email: '',
        password: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.action(user);
  }

  names() {
    if (this.props.names) {
      return (
        <>
          <label>First name
          <input type="text"
            value={this.state.fname}
            onChange={this.update("fname")}
            className="login-input name"
            placeholder="First name"
          />
          </label>Last name
          <input type="text"
            value={this.state.lname}
            onChange={this.update("lname")}
            className="login-input name"
            placeholder="Last name"
          />
        </>
      );
    }
  }

  zip() {
    if (this.props.names) {
      return (
        <div className="zip">
          <label>Zip code
            <input type="text"
              value={this.state.zipcode}
              onChange={this.update("zipcode")}
              className="login-input"
              placeholder="Zip code"
            />
          </label>
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

  render() {
    return (
      <div className="session-modal">
        <big className="session-form-header">{this.props.formHeader}
          <small className="session-form-subheader">
            {this.props.formSubHeader}
          </small>
        </big>
        <br />
        <button className="session-form-button">{this.props.formButton}</button>
        <form onSubmit={this.handleSubmit} className="session-form">
          {this.errors()}
          {this.names()}
          <label>Email address
            <input type="email"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Email address"
            />
          </label>
          <label>{this.props.names ? "Create a password" : "Password"}
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder={ this.props.names ? "Create a password" : "Password"}
            />
          </label>
          {this.zip()}
          <input className="session-submit" type="submit" value={this.props.formType} />
        </form>
        {this.props.navLinkMessage}{this.props.altSession}
      </div>
    );
  }
}

export default SessionForm;