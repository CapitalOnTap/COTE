import { storiesOf } from '@storybook/react';
import React from 'react';
import Dropdown from './Dropdown';
const options = [
  { title: 'Option 1', value: 1 },
  { title: 'Option 2', value: 2 },
  { title: 'Option 3', value: 3 }
];

const test = [
  { title: 'Flat 1 - 1 Rick Roberts Way', value: 0 },
  { title: 'Flat 2 - 1 Rick Roberts Way', value: 1 },
  { title: 'Flat 3 - 1 Rick Roberts Way', value: 2 },
  { title: 'Flat 4 - 1 Rick Roberts Way', value: 3 },
  { title: 'Flat 5 - 1 Rick Roberts Way', value: 4 },
  { title: 'Flat 6 - 1 Rick Roberts Way', value: 5 },
  { title: 'Flat 7 - 1 Rick Roberts Way', value: 6 },
  { title: 'Flat 8 - 1 Rick Roberts Way', value: 7 },
  { title: 'Flat 9 - 1 Rick Roberts Way', value: 8 },
  { title: 'Flat 10 - 1 Rick Roberts Way', value: 9 },
  { title: 'Flat 11 - 1 Rick Roberts Way', value: 10 },
  { title: 'Flat 12 - 1 Rick Roberts Way', value: 11 },
  { title: 'Flat 13 - 1 Rick Roberts Way', value: 12 },
  { title: 'Flat 14 - 1 Rick Roberts Way', value: 13 },
  { title: 'Flat 15 - 1 Rick Roberts Way', value: 14 },
  { title: 'Flat 16 - 1 Rick Roberts Way', value: 15 },
  { title: 'Flat 17 - 1 Rick Roberts Way', value: 16 },
  { title: 'Flat 18 - 1 Rick Roberts Way', value: 17 },
  { title: 'Flat 19 - 1 Rick Roberts Way', value: 18 },
  { title: 'Flat 20 - 1 Rick Roberts Way', value: 19 },
  { title: 'Flat 21 - 1 Rick Roberts Way', value: 20 },
  { title: 'Flat 22 - 1 Rick Roberts Way', value: 21 },
  { title: 'Flat 23 - 1 Rick Roberts Way', value: 22 },
  { title: 'Flat 24 - 1 Rick Roberts Way', value: 23 },
  { title: 'Flat 25 - 1 Rick Roberts Way', value: 24 },
  { title: 'Flat 26 - 1 Rick Roberts Way', value: 25 },
  { title: 'Flat 27 - 1 Rick Roberts Way', value: 26 },
  { title: 'Flat 28 - 1 Rick Roberts Way', value: 27 },
  { title: 'Flat 29 - 1 Rick Roberts Way', value: 28 },
  { title: 'Flat 30 - 1 Rick Roberts Way', value: 29 },
  { title: 'Flat 31 - 1 Rick Roberts Way', value: 30 },
  { title: 'Flat 32 - 1 Rick Roberts Way', value: 31 },
  { title: 'Flat 33 - 1 Rick Roberts Way', value: 32 },
  { title: 'Flat 34 - 1 Rick Roberts Way', value: 33 },
  { title: 'Flat 35 - 1 Rick Roberts Way', value: 34 },
  { title: 'Flat 36 - 1 Rick Roberts Way', value: 35 },
  { title: 'Flat 37 - 1 Rick Roberts Way', value: 36 },
  { title: 'Flat 38 - 1 Rick Roberts Way', value: 37 },
  { title: 'Flat 39 - 1 Rick Roberts Way', value: 38 },
  { title: 'Flat 40 - 1 Rick Roberts Way', value: 39 },
  { title: 'Flat 41 - 1 Rick Roberts Way', value: 40 },
  { title: 'Flat 42 - 1 Rick Roberts Way', value: 41 },
  { title: 'Flat 43 - 1 Rick Roberts Way', value: 42 },
  { title: 'Flat 44 - 1 Rick Roberts Way', value: 43 },
  { title: 'Flat 45 - 1 Rick Roberts Way', value: 44 },
  { title: 'Flat 46 - 1 Rick Roberts Way', value: 45 },
  { title: 'Flat 47 - 1 Rick Roberts Way', value: 46 },
  { title: 'Flat 48 - 1 Rick Roberts Way', value: 47 },
  { title: 'Flat 49 - 1 Rick Roberts Way', value: 48 },
  { title: 'Flat 50 - 1 Rick Roberts Way', value: 49 },
  { title: 'Flat 51 - 1 Rick Roberts Way', value: 50 },
  { title: 'Flat 52 - 1 Rick Roberts Way', value: 51 },
  { title: 'Flat 53 - 1 Rick Roberts Way', value: 52 },
  { title: 'Flat 54 - 1 Rick Roberts Way', value: 53 },
  { title: 'Flat 55 - 1 Rick Roberts Way', value: 54 },
  { title: 'Flat 56 - 1 Rick Roberts Way', value: 55 },
  { title: 'Flat 57 - 1 Rick Roberts Way', value: 56 },
  { title: 'Flat 58 - 1 Rick Roberts Way', value: 57 },
  { title: 'Flat 59 - 1 Rick Roberts Way', value: 58 },
  { title: 'Flat 60 - 1 Rick Roberts Way', value: 59 },
  { title: 'Flat 61 - 1 Rick Roberts Way', value: 60 },
  { title: 'Flat 62 - 1 Rick Roberts Way', value: 61 },
  { title: 'Flat 63 - 1 Rick Roberts Way', value: 62 },
  { title: 'Flat 64 - 1 Rick Roberts Way', value: 63 },
  { title: 'Flat 65 - 1 Rick Roberts Way', value: 64 },
  { title: 'Flat 66 - 1 Rick Roberts Way', value: 65 },
  { title: 'Flat 67 - 1 Rick Roberts Way', value: 66 },
  { title: 'Flat 68 - 1 Rick Roberts Way', value: 67 },
  { title: 'Flat 69 - 1 Rick Roberts Way', value: 68 },
  { title: 'Flat 70 - 1 Rick Roberts Way', value: 69 },
  { title: 'Flat 71 - 1 Rick Roberts Way', value: 70 },
  { title: 'Flat 72 - 1 Rick Roberts Way', value: 71 },
  { title: 'Flat 73 - 1 Rick Roberts Way', value: 72 },
  { title: 'Flat 74 - 1 Rick Roberts Way', value: 73 },
  { title: 'Flat 75 - 1 Rick Roberts Way', value: 74 },
  { title: 'Flat 76 - 1 Rick Roberts Way', value: 75 },
  { title: 'Flat 77 - 1 Rick Roberts Way', value: 76 },
  { title: 'Flat 78 - 1 Rick Roberts Way', value: 77 },
  { title: 'Flat 79 - 1 Rick Roberts Way', value: 78 },
  { title: 'Flat 80 - 1 Rick Roberts Way', value: 79 },
  { title: 'Flat 81 - 1 Rick Roberts Way', value: 80 },
  { title: 'Flat 82 - 1 Rick Roberts Way', value: 81 },
  { title: 'Flat 83 - 1 Rick Roberts Way', value: 82 },
  { title: 'Flat 84 - 1 Rick Roberts Way', value: 83 },
  { title: 'Flat 85 - 1 Rick Roberts Way', value: 84 },
  { title: 'Flat 86 - 1 Rick Roberts Way', value: 85 },
  { title: 'Flat 87 - 1 Rick Roberts Way', value: 86 },
  { title: 'Flat 88 - 1 Rick Roberts Way', value: 87 },
  { title: 'Flat 89 - 1 Rick Roberts Way', value: 88 },
  { title: 'Flat 90 - 1 Rick Roberts Way', value: 89 }
];

storiesOf('Dropdown', module)
  .add('Normal', () => <Dropdown options={test} />)
  .add('Controlled', () => <Dropdown options={test} selectedOption={test[0]} />)
  .add('Error', () => (
    <Dropdown
      error="Show this error message"
      options={options}
      onBlur={e => console.log(e)}
    />
  ))
  .add('Full width', () => <Dropdown options={options} full />)
  .add('With label', () => <Dropdown label="My dropdown" options={options} />)
  .add("With can't find my option", () => (
    <Dropdown
      label="My dropdown"
      options={options}
      lastOption={{ title: "Can't find my option", value: 0 }}
    />
  ))
  .add('No results/options', () => (
    <Dropdown
      label="My dropdown"
      options={[]}
      lastOption={{ title: "Can't find my option", value: 0 }}
    />
  ))
  .add('Disabled', () => <Dropdown options={test} disabled />);
