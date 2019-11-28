import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '../atoms/Icon/Icon';
import DropdownButton from './DropdownButton';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 40px;
  padding: 10px;
  &:hover {
    background-color: ${props =>
      props.theme ? props.theme.colorHighlight : 'rgba(39, 177, 97, 0.6)'};
  }
`;

const items = [
  <StyledDiv onClick={() => alert('Freeze')}>Freeze</StyledDiv>,
  <StyledDiv onClick={() => alert('Closed')}>Closed</StyledDiv>,
  <StyledDiv onClick={() => alert('Broken')}>Broken</StyledDiv>
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
  .add('Normal', () => <DropdownButton text="Actions">{items}</DropdownButton>)
  .add('Primary Outline', () => (
    <DropdownButton primary outline text="Actions">
      {items}
    </DropdownButton>
  ))
  .add('Danger Outline', () => (
    <DropdownButton danger outline text="Actions">
      {items}
    </DropdownButton>
  ))
  .add('Secondary Outline', () => (
    <DropdownButton secondary outline text="Actions">
      {items}
    </DropdownButton>
  ))
  .add('Primary Solid', () => (
    <DropdownButton primary solid text="Actions">
      {items}
    </DropdownButton>
  ))
  .add('Danger Solid', () => (
    <DropdownButton danger solid text="Actions">
      {items}
    </DropdownButton>
  ))
  .add('Secondary Solid', () => (
    <DropdownButton secondary solid text="Actions">
      {items}
    </DropdownButton>
  ))
  .add('Small Primary Outline', () => (
    <DropdownButton primary outline small text="Actions">
      {items}
    </DropdownButton>
  ));
