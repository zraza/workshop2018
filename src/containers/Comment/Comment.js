import React from 'react';
import axios from 'axios';

import { Heading, Button, List, ListItem } from '../../components';
import { AuthConsumer } from '../../contexts';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: undefined,
      comments: [],
      day: props.day
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  async handlePost() {
    const { comment, day } = this.state;
    const res = await axios.post(`${process.env.REACT_APP_API_BASE}/comments`, {
      comment,
      day
    });
    this.setState({
      comment: '',
      comments: [...this.state.comments, res.data]
    });
  }

  async componentDidMount() {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE}/comments?day=${this.state.day}`
    );
    this.setState({ comments: res.data });
  }

  handleOnChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { comments, comment } = this.state;
    return (
      <React.Fragment>
        <Heading>Comments</Heading>
        {comments.length > 0 && (
          <List style={{ marginBottom: '8px' }}>
            {comments.map(({ comment }) => (
              <ListItem key={comment}>{comment}</ListItem>
            ))}
          </List>
        )}
        <AuthConsumer>
          {({ auth, user, login }) => (
            <React.Fragment>
              {!auth && <Button onClick={login}>Login</Button>}
              {auth && (
                <React.Fragment>
                  <textarea
                    name="comment"
                    value={comment}
                    style={{ width: '100%' }}
                    placeholder={`Comment as ${user.name}`}
                    onChange={this.handleOnChange}
                  />
                  <Button onClick={this.handlePost}>Post</Button>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </AuthConsumer>
      </React.Fragment>
    );
  }
}

export default Comment;
