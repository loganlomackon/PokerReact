import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//MUST:
//npm install --save redux-promise
//npm install --save axios
//
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivacyPolicy from './components/privacy_policy';
import LoginPanel from './components/login_panel';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/privacy_policy" component={PrivacyPolicy} />
          <Route path="/" component={LoginPanel} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
