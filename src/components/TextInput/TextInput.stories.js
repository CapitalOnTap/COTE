import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import TextInput from './TextInput';
import Button from '../atoms/Button/Button';

const poundMask = createNumberMask({
  prefix: '£ ',
  thousandsSeparatorSymbol: ',',
  integerLimit: 10,
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2
});

class TextInputRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleFocus() {
    if (this.inputRef && this.inputRef.current && this.inputRef.current.inputElement) {
      this.inputRef.current.inputElement.focus();
    }
  }
  render() {
    return (
      <div>
        <TextInput ref={this.inputRef} />
        <Button solid onClick={() => this.handleFocus()}>
          Focus Input
        </Button>
      </div>
    );
  }
}

storiesOf('Text Input', module)
  .add('Normal', () => <TextInput placeholder="Placeholder value" />)
  .add('Required', () => <TextInput required error="There was an error" />)
  .add('Required - no error message', () => <TextInput required />)
  .add('With Label', () => <TextInput placeholder="Placeholder value" labelText="Label" />)
  .add('With subLabel', () => (
    <TextInput placeholder="Placeholder value" labelText="Label" subLabelText="subLabel" />
  ))
  .add('With info', () => <TextInput info="This is an info to help user." />)
  .add('With info and error', () => (
    <TextInput info="This is an info to help user." error="Field is required" required />
  ))
  .add('With warning', () => <TextInput warning="This is a warning to the user." />)
  .add('With mask - Number', () => (
    <TextInput
      placeholder="e.g. 07858585858855"
      mask={[
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        ' ',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        ' ',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/
      ]}
    />
  ))
  .add('With currency mask', () => <TextInput placeholder="" guide={true} mask={poundMask} />)
  .add('With mask and guide - Number', () => (
    <TextInput
      placeholder="e.g. 07858585858855"
      guide={true}
      mask={[
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        ' ',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        ' ',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/
      ]}
    />
  ))
  .add('With mask - Text', () => (
    <TextInput placeholder="e.g. Text up to 8 characters" mask={[/^[a-zA-Z ]+$/]} />
  ))
  .add('Full-width', () => <TextInput placeholder="e.g. Text up to 8 characters" full />)
  .add('With Tooltip', () => (
    <div style={{ width: '400px' }}>
      <TextInput
        placeholder="Type something"
        labelText="Hellooooooo"
        full
        tooltip={{
          title: 'Why we need to know your Personal Income?',
          description:
            'Your Personal Income can help us to blabla information information information information information information information information'
        }}
      />
    </div>
  ))
  .add('Disabled', () => <TextInput disabled placeholder="Placeholder value" />)
  .add('ForwardRef', () => <TextInputRef />);
