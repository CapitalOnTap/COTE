import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
  .add('Default', () => <Tooltip />)
  .add('No label', () => <Tooltip withoutLabel />)
  .add('Trigger Event', () => (
    <Tooltip trigger="click" icon="help" label="Need Help" interactive />
  ));
