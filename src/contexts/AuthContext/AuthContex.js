import React from 'react';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      user: undefined
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ auth: true, user: { name: 'John Smith' } });
  }

  logout() {
    this.setState({ auth: false, user: undefined });
  }

  render() {
    const { children } = this.props;
    const { auth, user } = this.state;
    return (
      <AuthContext.Provider
        value={{
          auth,
          user,
          login:this.login,
          logout:this.logout
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
