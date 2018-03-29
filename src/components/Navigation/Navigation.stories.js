import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './Navigation';

storiesOf('Navigation', module).add('Normal', () => (
  <div style={{ backgroundColor: '#f3f3f3', height: '200px' }}>
    <Navigation />
  </div>
));

storiesOf('Navigation', module).add('On Click Item', () => (
  <div style={{ backgroundColor: '#f3f3f3', height: '200px' }}>
    <Navigation
      items={[
        {
          title: 'Click me',
          onClick: () => {
            console.log("I've been clicked");
          }
        }
      ]}
    />
  </div>
));

storiesOf('Navigation', module).add('Href for Item', () => (
  <div style={{ backgroundColor: '#f3f3f3', height: '200px' }}>
    <Navigation
      items={[
        {
          title: 'To Google',
          url: 'http://google.com/'
        }
      ]}
    />
  </div>
));
