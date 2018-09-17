import React from 'react';
import renderer from 'react-test-renderer';

import Attendees from './Attendees';

describe('Attendees:', () => {
  const attendees = ['John Smith'];
  it('renders correctly', () => {
    const tree = renderer.create(<Attendees attendees={attendees} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
