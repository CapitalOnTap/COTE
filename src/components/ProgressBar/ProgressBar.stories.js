import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from './ProgressBar';

storiesOf('ProgressBar', module).add('Normal', () => <ProgressBar currentStep={5} progress={88} />);

storiesOf('ProgressBar', module).add('No steps', () => <ProgressBar progress={77} noSteps />);
