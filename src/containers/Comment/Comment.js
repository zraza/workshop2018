import React from 'react';
import { Heading, Button } from '../../components';
import { AuthConsumer } from '../../contexts';

const Comment = () => (
  <React.Fragment>
    <Heading>Comments</Heading>
    <AuthConsumer>
      {({ auth, user, login }) => (
        <React.Fragment>
          {!auth && <Button onClick={login}>Login</Button>}
          {auth && (
            <textarea
              style={{ width: '100%' }}
              placeholder={`Comment as ${user.name}`}
            />
          )}
        </React.Fragment>
      )}
    </AuthConsumer>
  </React.Fragment>
);

export default Comment;
