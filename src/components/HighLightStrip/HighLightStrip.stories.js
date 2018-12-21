import { storiesOf } from '@storybook/react';
import React from 'react';
import HighlightStrip from './';

storiesOf('HighlightStrip', module)
  .add('With text inside', () => (
    <HighlightStrip>
      Pariatur magna dolore nulla enim excepteur tempor qui pariatur Lorem sit
      velit.
    </HighlightStrip>
  ))
  .add('With error message', () => (
    <HighlightStrip danger>
      Pariatur magna dolore nulla enim excepteur tempor qui pariatur Lorem sit
      velit.
    </HighlightStrip>
  ));
