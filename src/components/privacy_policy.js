import React, { Component } from 'react';
//npm install --save react-markdown
// npm install --save json-loader
//npm install raw-loader
var Markdown = require('react-markdown');

class PrivacyPolicy extends Component {

  componentWillMount() {
    var content = require('../../resources/privacy_policy.md');
    this.setState({
      content: content
    });
  }

  render() {
    var content = this.state.content;
    return (
      <div className="basic-page">
        <div className="content">
          <Markdown source={content}/>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
