import { storiesOf } from '@storybook/react';
import React from 'react';
import RadioButton from '.';

const NormalStyles = ({ children }) => (
  <div style={{ maxWidth: '400px', margin: '0 auto' }}>{children}</div>
);

const InlineStyles = ({ children }) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>{children}</div>
);

storiesOf('RadioButton', module).add('Normal', () => (
  <NormalStyles>
    <RadioButton value={1} label="Option 1" checked />
    <RadioButton value={2} label="Option 2" />
    <RadioButton value={3} label="Option 3" />
  </NormalStyles>
));
storiesOf('RadioButton', module).add('Inline', () => (
  <InlineStyles>
    <RadioButton inline value={1} label="Yes" checked />
    <RadioButton inline value={2} label="No" />
  </InlineStyles>
));
storiesOf('RadioButton', module).add('Disabled', () => (
  <InlineStyles>
    <RadioButton inline disabled value={1} label="Yes" checked />
    <RadioButton inline disabled value={2} label="No" />
  </InlineStyles>
));
