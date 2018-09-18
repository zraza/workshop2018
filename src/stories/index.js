import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Button } from '../components';

storiesOf('Button', module).add(
  'Button component',
  withInfo({
    inline: true,
    header: false
  })(() => (
    <div>
      <Button>Click me</Button>
      <Button outline>Click me</Button>
    </div>
  ))
);
