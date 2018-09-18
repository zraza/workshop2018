import axios from 'axios';
import React from 'react';
import { List, ListItem, Button } from '../';

const progressToState = {
  completed: 'success',
  started: 'warning',
  pending: 'error'
};

class Topics extends React.Component {

  render() {
    const { data, handleProgressUpdate } = this.props;
    return (
      <List>
        {data.map(({ id, progress, title }) => (
          <ListItem key={id} state={progressToState[progress]}>
            {title}
            {progress === 'pending' && (
              <Button
                style={{ float: 'right' }}
                onClick={() => handleProgressUpdate(id, 'started')}
              >
                Start
              </Button>
            )}
            {progress === 'started' && (
              <Button
                style={{ float: 'right' }}
                onClick={() => handleProgressUpdate(id, 'completed')}
              >
                Mark completed
              </Button>
            )}
            {progress === 'completed' && (
              <Button disabled style={{ float: 'right' }} outline>
                Completed
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    );
  }
}
export default Topics;
