import React from 'react';
import { Container, Heading, Attendees, Topics } from '../';

const attendees = [
  'Alex Thomas',
  'Chris Dix',
  'Chris Monkman',
  'Daniel Almaguermelendez',
  'Gillan Cash',
  'Michael Lord',
  'Thiruppathi Muthukumar'
];

const topics = [
  'React introduction',
  'React Components',
  'Introduction to JSX',
  "What's new in ES6",
  'Introduction to yarn',
  'Introduction to create-react-app',
  'Introduction to jest'
];

const Workshop = props => (
  <Container>
    <Heading>Workshop {props.year}</Heading>
    <h2>Topics</h2>
    <Topics topics={topics} />
    <h2>Attendees</h2>
    <Attendees attendees={attendees} />
  </Container>
);

export default Workshop;
