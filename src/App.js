import React, { Component } from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux'
import store from '../src/redux/store'

import './App.css'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
