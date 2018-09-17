import React from 'react';

const Attendees = ({ data }) => (
  <ul>
    {data.map(attendee => (
      <li key={attendee}>{attendee}</li>
    ))}
  </ul>
);

export default Attendees;
