import React from 'react';

const Topics = ({ data }) => (
  <ul>
    {data.map(topic => (
      <li key={topic}>{topic}</li>
    ))}
  </ul>
);

export default Topics;
