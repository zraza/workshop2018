import React, { Component } from 'react';
import { AuthProvider } from './contexts';

import BasicRoute from './components/BasicRoute';

class App extends Component {
  render() {
    return <AuthProvider><BasicRoute /></AuthProvider>;
  }
}

export default App;
