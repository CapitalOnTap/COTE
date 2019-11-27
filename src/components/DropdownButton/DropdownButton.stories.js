import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '../atoms/Icon/Icon';
import DropdownButton from './DropdownButton';

const items = [
  {
    text: 'Freeze',
    onClick: () => {
      console.log('Freeze');
    }
  },
  {
    text: 'Broken',
    onClick: () => {
      console.log('Broken');
    }
  },
  {
    text: 'Close',
    onClick: () => {
      console.log('Close');
    }
  }
];

const elementOptions = [
  { title: <span>Option 1</span>, value: 1 },
  { title: <Icon name="more_horiz" />, value: 2 },
  {
    title: (
      <div style={{ marginTop: '20px' }}>
        <i>Option 3</i>
      </div>
    ),
    value: 3
  }
];

storiesOf('DropdownButton', module).add('Normal', () => (
  <DropdownButton secondary solid text="Actions" items={items} />
));
