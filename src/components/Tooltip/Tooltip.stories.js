import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
  .add('Default', () => <Tooltip/>)
  .add('No label', () => <Tooltip withoutLabel/>)
