import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonGroup from './ButtonGroup';

const options = [
  { title: 'Option 1', value: 1 },
  { title: 'Option 2', value: 2 },
  { title: 'Option 3', value: 3 },
  { title: 'Option 4', value: 4 }
];

storiesOf('ButtonGroup', module)
  .add('With 2 buttons', () => (
    <ButtonGroup options={[{ title: 'Option 1', value: 1 }, { title: 'Option 2', value: 2 }]} />
  ))
  .add('With 3 buttons', () => (
    <ButtonGroup
      options={[
        { title: 'Option 1', value: 1 },
        { title: 'Option 2', value: 2 },
        { title: 'Option 3', value: 3 }
      ]}
    />
  ))
  .add('With 4 buttons', () => <ButtonGroup options={options} wrap />)
  .add('With label', () => <ButtonGroup options={options} label="Choose option" />)
  .add('With primary color', () => <ButtonGroup primary options={options} label="Choose option" />)
  .add('With controlled value', () => (
    <ButtonGroup
      options={[
        { title: 'Option 1', value: 1 },
        { title: 'Option 2', value: 2 },
        { title: 'Option 3', value: 3 }
      ]}
      selectedValue={2}
    />
  ));
