import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';
import styled from 'styled-components';

const CheckboxWithMargin = styled(Checkbox)`
  margin-bottom: 2em;
`;

storiesOf('Checkbox', module)
  .add('Normal', () => <Checkbox />)
  .add('With label', () => <Checkbox label="This is a label." />)
  .add('With primary color', () => <Checkbox label="This is a label." primary />)
  .add('With overriden margin-top', () => <CheckboxWithMargin label="This is a label." primary />)
  .add('Is required', () => <CheckboxWithMargin label="This is a label." invalid />)
  .add('Disabled', () => <Checkbox disabled />);
