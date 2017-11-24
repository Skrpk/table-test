import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Main from './modules/Main/Main';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
