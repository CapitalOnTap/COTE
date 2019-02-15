import React from 'react';
import { storiesOf } from '@storybook/react';
import WidgetBox from './WidgetBox';

storiesOf('WidgetBox', module)
  .add('With subitems', () => (
    <WidgetBox title="Custom title">
      <div> This is a test</div>
    </WidgetBox>
  ))
  .add('With render title prop', () => (
    <WidgetBox renderTitle={() => <p>I'm a rendered node for the title!</p>}>
      <div> This is a test</div>
    </WidgetBox>
  ));
