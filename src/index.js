import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux'
import reducer from '../src/reducers/index'
import { Provider } from 'react-redux'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log('store', store)
console.log('state', store.getState())

ReactDOM.render(
  <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
  document.getElementById('root')
);
registerServiceWorker();
