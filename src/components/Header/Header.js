import React from 'react';
import { AuthConsumer } from '../../contexts';
import Container from '../Container/Container';
import Button from '../Button/Button';

const Header = () => (
  <AuthConsumer>
    {({ auth, user, login, logout }) => (
      <Container>
        {!auth && <Button onClick={login}>Login</Button>}
        {auth && <Button onClick={logout}> {user.name} - Logout</Button>}
      </Container>
    )}
  </AuthConsumer>
);

export default Header;
