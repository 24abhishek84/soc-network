/* eslint-disable func-names */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { store } from './createStore';
// import Keycloak from 'keycloak-js';
// import axios from 'axios';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './index.scss';

Moment.locale('en')
momentLocalizer()

// axios.defaults.baseURL = 'https://idm.prenigma.com/socialnetwork/';
// // axios.defaults.headers.post['Content-Type'] = 'application/json';

// TODO move that to webpack ENV
// const keycloak = Keycloak({
//   url: 'https://sso.prenigma.com/auth',
//   realm: 'prenigma',
//   clientId: 'socialnetwork-ui'
// });

// keycloak.init({ onLoad: 'login-required' }).success(authenticated => {
//   if (authenticated) {
//     axios.defaults.headers.common.Authorization = `Bearer ${keycloak.token}`;

//     // TODO may need to move ReactDOM.render here
//   }

//   ReactDOM.render(
//     <Provider store={store}>
//       <App keycloak={keycloak} />
//     </Provider>, document.getElementById('root'));

//   // If you want your app to work offline and load faster, you can change
//   // unregister() to register() below. Note this comes with some pitfalls.
//   // Learn more about service workers: https://bit.ly/CRA-PWA
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
