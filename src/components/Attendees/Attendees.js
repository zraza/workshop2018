import React from 'react';
import {List, ListItem} from '../';

const Attendees = ({ data }) => (
  <List>
    {data.map(attendee => (
      <ListItem key={attendee}>{attendee}</ListItem>
    ))}
  </List>
);

export default Attendees;
