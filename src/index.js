import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Import registration logic

// Redux Setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';  // Corrected import

// Reducers
import reducers from './reducers';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.register();  // Updated to serviceWorkerRegistration

// Redux Dev Tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Creating Central Store for State
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))  // Corrected to use 'thunk'
);

// React 18 root rendering
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root using createRoot
root.render(  // Use root.render() instead of ReactDOM.render()
  <Provider store={store}>
    <App />
  </Provider>
);
