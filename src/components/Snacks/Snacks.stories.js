import { storiesOf } from '@storybook/react';
import React from 'react';
import SnacksContainer from './SnacksContainer';
import { SnackbarStatus } from './types';

const successSnack = {
  '1': {
    title: 'This is the title of success',
    message: 'A message of success',
    status: SnackbarStatus.Success,
    icon: 'check',
    delay: 4000
  }
};

const failureSnack = {
  '1': {
    title: 'This is the title of failure',
    message: 'A message of failure',
    status: SnackbarStatus.Failure,
    icon: 'error',
    delay: 4000
  }
};

const infoSnack = {
  '1': {
    title: 'This is the title of information',
    message: 'A message of information',
    status: SnackbarStatus.Info,
    icon: 'info',
    delay: 4000
  }
};

const snackDismissed = key =>
  console.log('Dismissed triggered with key ' + key);

storiesOf('Snacks', module)
  .add('Success', () => (
    <SnacksContainer snacks={successSnack} clearSnack={snackDismissed} />
  ))
  .add('Failure', () => (
    <SnacksContainer snacks={failureSnack} clearSnack={snackDismissed} />
  ))
  .add('Info', () => (
    <SnacksContainer snacks={infoSnack} clearSnack={snackDismissed} />
  ));
