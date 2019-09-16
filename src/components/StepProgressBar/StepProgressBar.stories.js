import React from 'react';
import { storiesOf } from '@storybook/react';
import StepProgressBar from './StepProgressBar';

storiesOf('StepProgressBar', module).add('Normal', () => (
  <StepProgressBar currentStep={5} progress={88} />
));
