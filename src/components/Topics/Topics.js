import axios from 'axios';
import React from 'react';
import { List, ListItem, Button } from '../';

const progressToState = {
  completed: 'success',
  started: 'warning',
  pending: 'error'
};

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  async handleProgressUpdate(id, progress) {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE}/topic/${id}`,
      { progress }
    );
    const { data } = this.state;
    this.setState({
      data: data.map(row => {
        if (row.id === res.data.id) return res.data;
        return row;
      })
    });
  }

  render() {
    const { data } = this.state;
    return (
      <List>
        {data.map(({ id, progress, title }) => (
          <ListItem key={id} state={progressToState[progress]}>
            {title}
            {progress === 'pending' && (
              <Button
                style={{ float: 'right' }}
                onClick={() => this.handleProgressUpdate(id, 'started')}
              >
                Start
              </Button>
            )}
            {progress === 'started' && (
              <Button
                style={{ float: 'right' }}
                onClick={() => this.handleProgressUpdate(id, 'completed')}
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
