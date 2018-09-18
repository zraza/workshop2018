import React from 'react';
import { Container, Heading, Attendees, Topics } from '../../components';
import { withData } from '../../hoc';


const TopicsWithData = withData(Topics)(`/topics-with-detail`);
const AttendeesWithData = withData(Attendees)(`/attendees`);

class Workshop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { year } = this.props;
    return (
      <Container>
        <Heading>Workshop {year}</Heading>
        <h2>Topics</h2>
        <TopicsWithData />
        <h2>Attendees</h2>
        <AttendeesWithData />
      </Container>
    );
  }
}

export default Workshop;
