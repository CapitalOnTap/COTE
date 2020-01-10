import { storiesOf } from '@storybook/react';
import React from 'react';
import SnacksContainer from './SnacksContainer';
import { SnackbarStatus } from './types';
import Icon from '../atoms/Icon/Icon';

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
    icon: 'info'
  }
};

const actionSnack = {
  '1': {
    title: 'This is the title of action',
    message: 'A message for action',
    status: SnackbarStatus.Info,
    icon: 'info',
    action: () => alert('Button clicked'),
    actionText: 'Action'
  }
};

const elementTitleMessageSnack = {
  '1': {
    title: <h1 style={{ fontSize: '2em' }}>Custom h1 title</h1>,
    message: (
      <div>
        Custom message containing multiple elements
        <br />
        <Icon name="more_horiz" />
      </div>
    ),
    status: SnackbarStatus.Info,
    icon: 'info',
    delay: 4000
  }
};

const snackDismissed = key => console.log('Dismissed triggered with key ' + key);

storiesOf('Snacks', module)
  .add('Success', () => <SnacksContainer snacks={successSnack} clearSnack={snackDismissed} />)
  .add('Failure', () => <SnacksContainer snacks={failureSnack} clearSnack={snackDismissed} />)
  .add('Info', () => <SnacksContainer snacks={infoSnack} clearSnack={snackDismissed} />)
  .add('Action', () => <SnacksContainer snacks={actionSnack} clearSnack={snackDismissed} />)
  .add('Elements for title and messages', () => (
    <SnacksContainer snacks={elementTitleMessageSnack} clearSnack={snackDismissed} />
  ));
