import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { postLogin } from '../actions/index';
import axios from 'axios';

const BACKEND_LOGIN_URL = 'https://backend.pokerhousecn.com/api/client_auth';
//const BACKEND_LOGIN_URL = 'http://localhost:8080/api/client_auth';

class LoginPanel extends Component {
    constructor(props) {
      super(props);

      this.state = {
        memberId: '',
        loginUrl: ''
      };

      this.onMemberIdInputChange = this.onMemberIdInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onMemberIdInputChange(event) {
    this.setState({ memberId: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //fetch weather data
    //this.props.postLogin(this.state.loginCode);

    axios.post(BACKEND_LOGIN_URL, {
      auth_type: 'quick',
      member_id: this.state.memberId
    }).then(res => {
      //console.log(res.data.login_url);
      window.location.assign(res.data.login_url);
    }).catch((err) => {
      this.setState({ memberId: '' });
      console.log(err);
    });
  }

  render() {
    return (
      <div>

      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="User ID"
          className="form-control"
          value={this.state.memberId}
          onChange={this.onMemberIdInputChange}
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
