import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '../atoms/Icon/Icon';
import DropdownButton from './DropdownButton';

const items = [
  {
    text: 'Freeze',
    onClick: () => {
      alert('On Click: Freeze');
    }
  },
  {
    text: 'Broken',
    onClick: () => {
      alert('On Click: Broken');
    }
  },
  {
    text: 'Close',
    onClick: () => {
      alert('On Click: Close');
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

storiesOf('DropdownButton', module)
  .add('Normal', () => <DropdownButton text="Actions" items={items} />)
  .add('Primary Outline', () => <DropdownButton primary outline text="Actions" items={items} />)
  .add('Danger Outline', () => <DropdownButton danger outline text="Actions" items={items} />)
  .add('Secondary Outline', () => <DropdownButton secondary outline text="Actions" items={items} />)
  .add('Primary Solid', () => <DropdownButton primary solid text="Actions" items={items} />)
  .add('Danger Solid', () => <DropdownButton danger solid text="Actions" items={items} />)
  .add('Secondary Solid', () => <DropdownButton secondary solid text="Actions" items={items} />);
