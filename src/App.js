import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { AuthProvider } from './contexts';
import store from './redux/store';

import BasicRoute from './components/BasicRoute';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthProvider>
          <BasicRoute />
        </AuthProvider>
      </Provider>
    );
  }
}

export default App;
