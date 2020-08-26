import React from 'react';
import { storiesOf } from '@storybook/react';
import Widget from './Widget';

const items = [
  { icon: 'check_circle', title: 'USP 1' },
  { icon: 'check_circle', title: 'USP 2' },
  { icon: 'check_circle', title: 'USP 3' },
  { icon: 'check_circle', title: 'USP 4' }
];

storiesOf('Widget', module)
  .add('Without subitems', () => (
    <Widget
      title="Custom title"
      icon="card_membership"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt sagittis maximus. Nullam ut est in libero tempor molestie sit amet quis ligula."
    />
  ))
  .add('With subitems', () => <Widget title="Custom title" icon="card_membership" items={items} />);
