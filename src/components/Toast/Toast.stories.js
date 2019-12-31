import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './Toast';

storiesOf('Toast', module)
  .add('Normal', () => (
    <div style={{ backgroundColor: '#f3f3f3', height: '200px' }}>
      <Toast icon="check_circle" message="A success message here." title="My title" />
    </div>
  ))
  .add('With warning', () => (
    <div style={{ backgroundColor: '#f3f3f3', height: '200px' }}>
      <Toast icon="warning" message="A warning message" warning buttonText="Try Again" />
    </div>
  ))
  .add('With error', () => (
    <div style={{ backgroundColor: '#f3f3f3', height: '200px' }}>
      <Toast icon="error" message="An error message" error buttonText="Try Again" />
    </div>
  ))
  .add('With callback on button', () => (
    <div style={{ backgroundColor: '#f3f3f3', height: '200px' }}>
      <Toast
        icon="check_circle"
        message="A message"
        buttonText="Dismiss"
        onButtonClick={() => alert('Custom callback')}
      />
    </div>
  ));
