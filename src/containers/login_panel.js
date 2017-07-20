import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { postLogin } from '../actions/index';
import axios from 'axios';

const BACKEND_LOGIN_URL = 'https://backend.pokerhousecn.com/api/client_auth';

class LoginPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginUrl: ''
    };

    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //!!!! "this" in a callback function will go wrong without "bind(this)""
  onEmailInputChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordInputChange(event) {
    this.setState({ password: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //fetch weather data
    //this.props.postLogin(this.state.loginCode);

    axios.post(BACKEND_LOGIN_URL, {
      auth_type: 'email_password',
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      window.location.assign(res.data.login_url);
    }).catch((err) => {
      this.setState({ email: '', password : '' });
      console.log(err);
    });
  }

  render() {
    return (
      <div>

      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Email"
          className="form-control"
          value={this.state.email}
          onChange={this.onEmailInputChange}
        />
        <input
          placeholder="Password"
          className="form-control"
          value={this.state.password}
          onChange={this.onPasswordInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postLogin }, dispatch);
}

function mapStateToProps({ loginUrl }) {
  return { loginUrl };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);
