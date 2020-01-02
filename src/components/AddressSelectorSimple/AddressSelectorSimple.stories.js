import React from 'react';
import { storiesOf } from '@storybook/react';
import AddressSelectorSimple from './AddressSelectorSimple';

const results = [
  {
    title: '12 Road Street',
    buildingNumber: '12',
    postCode: 'SW1 1AA',
    city: 'London',
    street: 'Road Street',
    buildingName: '',
    unitNumber: 'Absolute Unit'
  },
  {
    title: '13 Road Street',
    buildingNumber: '13',
    postCode: 'SW1 1AA',
    city: 'London',
    street: 'Road Street',
    buildingName: '',
    unitNumber: ''
  },
  {
    title: '14 Road Street',
    buildingNumber: '14',
    postCode: 'SW1 1AA',
    city: 'London',
    street: 'Road Street',
    buildingName: 'Name this thing',
    unitNumber: ''
  }
];

const defaultProps = {
  fieldNames: {
    search: 'search',
    buildingNumber: 'buildingNumber',
    unitNumber: 'unitNumber',
    buildingName: 'buildingName',
    street: 'street',
    postCode: 'postCode',
    city: 'city'
  },
  errors: {},
  touched: {},
  label: 'Address',
  searchButtonId: '1',
  id: '1',
  name: 'address'
};

class AddressSelectorSimpleWrapper extends React.Component {
  state = {
    results: null,
    searching: false,
    search: '',
    buildingNumber: '',
    postCode: '',
    city: '',
    street: '',
    buildingName: '',
    unitNumber: ''
  };

  clearData = () => {
    this.setState({
      buildingNumber: '',
      postCode: '',
      city: '',
      street: '',
      buildingName: '',
      unitNumber: ''
    });
  };

  setFieldValue = (name, value) => {
    this.setState({ [name]: value });
  };

  onButtonClick = () => {
    this.setState({ searching: true });
    setTimeout(() => {
      this.setState({ results, searching: false });
    }, 2000);
  };

  onSelectedAddress = address => {
    alert(`Address selected: ${JSON.stringify(address)}`);
  };

  onChange = val => {
    this.setState({ [val.currentTarget.name]: val.currentTarget.value });
  };

  render() {
    return (
      <AddressSelectorSimple
        {...defaultProps}
        {...this.state}
        onButtonClick={this.onButtonClick}
        setFieldValue={this.setFieldValue}
        onSelectedAddress={this.onSelectedAddress}
        clearData={this.clearData}
        onChange={this.onChange}
        postCodeSearch={this.state.search}
      />
    );
  }
}

storiesOf('Address Selector Simple', module).add('Default', () => <AddressSelectorSimpleWrapper />);
storiesOf('Address Selector Simple', module).add('Disabled', () => (
  <AddressSelectorSimple disabled />
));
