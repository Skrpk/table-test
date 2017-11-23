import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Main from './modules/Main';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
