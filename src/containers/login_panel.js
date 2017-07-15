import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { postLogin } from '../actions/index';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:8090/api/client_auth';
const LOGIN_URL = 'www.google.com';

class LoginPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginCode: '',
      loginUrl: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //!!!! "this" in a callback function will go wrong without "bind(this)""
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ loginCode: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //fetch weather data
    //this.props.postLogin(this.state.loginCode);
    //this.setState({ loginCode: '' });

    axios.post(ROOT_URL, {
      auth_type: 'code',
      code: this.state.loginCode
    }).then(res => {
      console.log(res.data.login_url);
      window.location.assign(LOGIN_URL);
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="輸入認證碼並登入"
          className="form-control"
          //Local state
          value={this.state.loginCode}
          onChange={this.onInputChange}
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
