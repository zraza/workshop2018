import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { userLogin, userLogout } from '../../redux/actions/auth';

const Header = ({ auth, user, login, logout }) => (
  <Container>
    {!auth && (
      <Button
        onClick={() => login({ auth: true, user: { name: 'John Smith' } })}
      >
        Login
      </Button>
    )}
    {auth && <Button onClick={logout}> {user.name} - Logout</Button>}
  </Container>
);

export default connect(
  state => {
    const { auth, user } = state.auth;
    return {
      auth,
      user
    };
  },
  {
    login: userLogin,
    logout: userLogout
  }
)(Header);
