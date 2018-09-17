import React from 'react';

const Topics = ({ topics }) => (
  <ul>
    {topics.map(topic => (
      <li key={topic}>{topic}</li>
    ))}
  </ul>
);

export default Topics;
