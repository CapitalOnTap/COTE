import { storiesOf } from '@storybook/react';
import React from 'react';
import TextInput from '../../TextInput/TextInput';
import Icon from '../Icon/Icon';
import Button from './Button';

storiesOf('Button/Normal', module)
  .add('Normal', () => <Button>Click me</Button>)
  .add('Danger', () => <Button danger>Click me</Button>)
  .add('Primary', () => <Button primary>Click me</Button>)
  .add('Secondary', () => <Button secondary>Click me</Button>)
  .add('Large', () => <Button>Click me</Button>)
  .add('Disabled solid', () => (
    <Button disabled solid>
      Click me
    </Button>
  ))
  .add('Full width', () => <Button full>Click me</Button>)
  .add('Loading', () => (
    <div>
      <Button loading>Click me</Button>
    </div>
  ))
  .add('Loading with string loadingText', () => (
    <div>
      <Button loading loadingText="Loading...">
        Click me
      </Button>
    </div>
  ))
  .add('Loading with element loadingText', () => (
    <div>
      <Button loading loadingText={<Icon name="more_horiz" />}>
        Click me
      </Button>
    </div>
  ))
  .add('Button and textinput side by side', () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Button style={{ marginRight: '1em' }}>Click me</Button>
      <TextInput />
    </div>
  ));

storiesOf('Button/Outlined', module)
  .add('Normal', () => <Button outline>Click me</Button>)
  .add('Danger', () => (
    <Button outline danger>
      Delete
    </Button>
  ))
  .add('Primary', () => (
    <Button outline primary>
      Delete
    </Button>
  ))
  .add('Secondary', () => (
    <Button outline secondary>
      Delete
    </Button>
  ))
  .add('Large', () => (
    <Button outline large>
      Click me
    </Button>
  ))
  .add('Disabled', () => (
    <Button disabled outline>
      Click me
    </Button>
  ))
  .add('Full width', () => (
    <Button outline full>
      Click me
    </Button>
  ))
  .add('Loading', () => (
    <div>
      <Button loading outline>
        Click me
      </Button>
    </div>
  ))
  .add('Loading with string loadingText', () => (
    <div>
      <Button loading outline loadingText="Loading...">
        Click me
      </Button>
    </div>
  ))
  .add('Loading with element loadingText', () => (
    <div>
      <Button loading outline loadingText={<Icon name="more_horiz" />}>
        Click me
      </Button>
    </div>
  ))
  .add('Button and textinput side by side', () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Button outline style={{ marginRight: '1em' }}>
        Click me
      </Button>
      <TextInput />
    </div>
  ));

storiesOf('Button/Solid', module)
  .add('Normal', () => <Button solid>Click me</Button>)
  .add('Primary', () => (
    <Button solid primary>
      Click me
    </Button>
  ))
  .add('Secondary', () => (
    <Button solid secondary>
      Click me
    </Button>
  ))
  .add('Danger', () => (
    <Button solid danger>
      Click me
    </Button>
  ))
  .add('Disabled', () => (
    <Button solid disabled>
      Click me
    </Button>
  ))
  .add('Small', () => (
    <React.Fragment>
      <Button primary solid small>
        Click me
      </Button>
      <Button solid>Click me</Button>
    </React.Fragment>
  ))
  .add('Large', () => (
    <React.Fragment>
      <Button primary solid large>
        Click me
      </Button>
      <Button solid>Click me</Button>
    </React.Fragment>
  ))
  .add('Full width', () => (
    <Button solid primary full>
      Click me
    </Button>
  ))
  .add('Loading', () => (
    <div>
      <Button solid loading>
        Click me
      </Button>
    </div>
  ))
  .add('Loading with string loadingText', () => (
    <div>
      <Button solid loading loadingText="Loading...">
        Click me
      </Button>
    </div>
  ))
  .add('Loading with element loadingText', () => (
    <div>
      <Button solid loading loadingText={<Icon name="more_horiz" />}>
        Click me
      </Button>
    </div>
  ))
  .add('Button and textinput side by side', () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Button solid style={{ marginRight: '1em' }}>
        Click me
      </Button>
      <TextInput />
    </div>
  ));
