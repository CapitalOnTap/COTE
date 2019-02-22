import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import MenuDropdown from './MenuDropdown';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${defaultColors.default};
`;

storiesOf('MenuDropdown', module).add('Normal', () => (
  <MenuDropdown
    firstName="Jamie"
    lastName="Howard"
    legalName="Potatoe Farm"
    locatorId="F415T98"
  />
));

storiesOf('MenuDropdown', module).add('Small', () => (
  <MenuDropdown
    firstName="Jamie"
    lastName="Howard"
    legalName="Potatoe Farm"
    locatorId="F415T98"
    small="true"
  />
));

storiesOf('MenuDropdown', module).add('Reversed normal', () => (
  <Container>
    <MenuDropdown
      firstName="Jamie"
      lastName="Howard"
      legalName="Potatoe Farm"
      locatorId="F415T98"
      reverse
    />
  </Container>
));

storiesOf('MenuDropdown', module).add('Reversed small', () => (
  <Container>
    <MenuDropdown
      firstName="Jamie"
      lastName="Howard"
      legalName="Potatoe Farm"
      locatorId="F415T98"
      small="true"
      reverse
    />
  </Container>
));
