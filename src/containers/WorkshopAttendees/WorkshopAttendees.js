import React from 'react';
import { Container, Heading, Attendees, Topics } from '../../components';
import { withData } from '../../hoc';

const AttendeesWithData = withData(Attendees)(`/attendees`);

class WorkshopAttendees extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Heading>Attendees</Heading>
        <AttendeesWithData />
      </Container>
    );
  }
}

export default WorkshopAttendees;
