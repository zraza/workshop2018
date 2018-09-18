import React from 'react';
import axios from 'axios';
import { Container, Heading, Topics } from '../../components';

class Workshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleProgressUpdate = this.handleProgressUpdate.bind(this);
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

  async componentDidMount() {
    const { day } = this.props.match.params;
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE}/topics-with-detail?day=${day}`
    );
    this.setState({ data: res.data });
  }

  render() {
    const { day } = this.props.match.params;
    const { data } = this.state;
    return (
      <Container>
        <Heading>Topics / Day {day}</Heading>
        <Topics data={data} handleProgressUpdate={this.handleProgressUpdate} />
      </Container>
    );
  }
}

export default Workshop;
