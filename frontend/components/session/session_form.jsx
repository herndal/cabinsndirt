import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.name) {
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
    return (
      <>
        <label>First name
        <input type="text"
        value={this.state.fname}
        onChange={this.update("fname")}
        className="login-input name"
        />
        </label>Last name
        <input type="text"
          value={this.state.lname}
          onChange={this.update("lname")}
          className="login-input name"
        />
      </>
    );
  }

  zip() {
    return (
      <div className="zip">
        <label>Zip code
          <input type="text"
            value={this.state.zipcode}
            onChange={this.update("zipcode")}
            className="login-input"
          />
        </label>
      </div>
    )
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
        <h2>{this.props.formHeader}</h2>
        <p>{this.props.formSubHeader}</p>
        <br />
        <button className="session-form-button">{this.props.formButton}</button>
        <form onSubmit={this.handleSubmit} className="session-form">
          {this.errors()}
          {if (this.props.names) names()}
          <label>Email address
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
          </label>
          <label>{this.props.names ? "Create a password" : "Password"}
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
          {if (this.props.name) zip()}
          <input className="session-submit" type="submit" value={this.props.formType} />
        </form>
        {this.props.navLinkMessage}{this.props.navLink}
      </div>
    );
  }
}

export default SessionForm;
