import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './components/App/App.js';
import './styles/index.css';

// Provider = A method that gives us access to the redux store via connect method
// <Provider> </Provider> will give us direct access to the store to our connect function w/o passing down thru every single layer
// We give any instance access to the redux store

const store = createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// The above has given the chrome extension access to the redux store and all redux logic 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
