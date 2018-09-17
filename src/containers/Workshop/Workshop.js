import React from 'react';
import axios from 'axios';
import { Container, Heading, Attendees, Topics } from '../../components';

class Workshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      attendees: []
    };
  }
  async componentDidMount() {
    const resTopics = await axios.get(
      `${process.env.REACT_APP_API_BASE}/topics`
    );
    this.setState({
      topics: resTopics.data
    });

    const resAttendees = await axios.get(
      `${process.env.REACT_APP_API_BASE}/attendees`
    );
    this.setState({
      attendees: resAttendees.data
    });
  }

  render() {
    const { year } = this.props;
    const { topics, attendees } = this.state;

    return (
      <Container>
        <Heading>Workshop {year}</Heading>
        <h2>Topics</h2>
        <Topics topics={topics} />
        <h2>Attendees</h2>
        <Attendees attendees={attendees} />
      </Container>
    );
  }
}

export default Workshop;
