import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import ListCard from './ListCard';
import Icon from '../atoms/Icon/Icon';
import ToggleButton from '../ToggleButton';

const handleClick = () => {
  alert('clicked');
};

const AddIcon = styled(Icon)`
  color: ${props =>
    props.theme.colorPrimary ? props.theme.colorPrimary : defaultColors.black};
`;

const StyledLink = styled.a`
  color: ${props => props.theme.colorPrimary};
  font-weight: 500;
  padding-right: 16px;
  text-decoration: underline;
`;

storiesOf('ListCard', module)
  .add('Title with Icon', () => (
    <ListCard title="Title" border={true} full={true}>
      <AddIcon name="add" onClick={handleClick} />
    </ListCard>
  ))
  .add('Title with Link', () => (
    <ListCard title="Title" border={true} full={true}>
      <StyledLink onClick={handleClick}>link</StyledLink>
    </ListCard>
  ))
  .add('Title with toggle', () => (
    <ListCard title="Title" border={true} full={true}>
      <ToggleButton />
    </ListCard>
  ));
