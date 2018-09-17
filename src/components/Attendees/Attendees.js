import React from 'react';

const Attendees = ({ attendees }) => (
  <ul>
    {attendees.map(attendee => (
      <li key={attendee}>{attendee}</li>
    ))}
  </ul>
);

export default Attendees;
