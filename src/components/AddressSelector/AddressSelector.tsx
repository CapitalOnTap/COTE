import { Box, Flex } from '@rebass/grid';
import Button from '../atoms/Button/Button';
import Label from '../atoms/Typography/Label';
import ResultsList from '../ResultsList/ResultsList';
import TextInput from '../TextInput/TextInput';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const Row = props => <Flex {...props} mb={2} />;

const AddressRow = styled(Row)`
  position: relative;
`;

export const AddressResults = styled(ResultsList)`
  top: 82px;
`;

export const StyledLink = styled.a`
  color: ${props => (props.theme.colorPrimary ? props.theme.colorPrimary : '#466BAF')};
  cursor: pointer;
  text-decoration: underline;
`;

export interface Address {
  buildingNumber: string;
  unitNumber: string;
  buildingName: string;
  street: string;
  postCode: string;
  city: string;
}

interface Props {
  setFieldValue: (key: string, value: any) => void;
  onButtonClick: (postCodeSearch: string, flatNumberFilter: string) => void;
  onSelectedAddress: (address: Address) => void;
  clearData: () => void;
  postCodeSearch: string;
  flatNumberFilter?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onBlur?: ((event: React.FocusEvent<{}>) => void) | undefined;
  fieldNames: {
    search: string;
    buildingNumber: string;
    unitNumber: string;
    buildingName: string;
    street: string;
    postCode: string;
    city: string;
  };
  errors: any;
  label?: string;
  touched: any;
  results: [];
  searching?: boolean;
  selectedAddress?: Address;
  searchButtonId?: string;
  name: string;
  id?: string;
  buildingNumber?: string;
  unitNumber?: string;
  buildingName?: string;
  street?: string;
  postCode?: string;
  city?: string;
  disabled?: boolean;
  showFlatNumber: boolean;
}

interface State {
  showAddressFields: boolean;
}

class AddressSelector extends Component<Props, State> {
  public static defaultProps = {
    showFlatNumber: true
  };

  constructor(props) {
    super(props);

    this.state = {
      showAddressFields: false
    };
  }

  handleSelectedAddress = address => {
    // we have to handle setting the new field values here

    if (address.value !== -1) {
      const {
        buildingNumber,
        unitNumber,
        buildingName,
        street,
        postCode,
        city
      } = this.props.fieldNames;
      this.props.setFieldValue(buildingNumber, address.buildingNumber);
      this.props.setFieldValue(unitNumber, address.unitNumber);
      this.props.setFieldValue(street, address.street);
      this.props.setFieldValue(postCode, address.postCode);
      this.props.setFieldValue(city, address.city);
      this.props.setFieldValue(buildingName, address.buildingName);

      // sets state and right after calls next method bubbling up event
      this.setState({ showAddressFields: true }, () => this.props.onSelectedAddress(address));
    } else {
      this.setState({ showAddressFields: true });
    }
  };

  clearSelectedAddress = () => {
    this.setState({ showAddressFields: false });
    const {
      search,
      buildingNumber,
      unitNumber,
      buildingName,
      street,
      postCode,
      city
    } = this.props.fieldNames;
    this.props.setFieldValue(search, '');
    this.props.setFieldValue(buildingNumber, '');
    this.props.setFieldValue(unitNumber, '');
    this.props.setFieldValue(street, '');
    this.props.setFieldValue(postCode, '');
    this.props.setFieldValue(city, '');
    this.props.setFieldValue(buildingName, '');
    this.props.clearData();
  };

  handleNoResultFound() {
    this.setState({ showAddressFields: true });
  }

  handleSearch = (e, postCodeSearch, flatNumberFilter) => {
    e.preventDefault();
    this.props.onButtonClick(postCodeSearch, flatNumberFilter);
    return false;
  };

  render() {
    const { showAddressFields } = this.state;
    const {
      postCodeSearch,
      flatNumberFilter,
      onChange,
      onBlur,
      fieldNames,
      errors,
      label,
      touched,
      results,
      searching,
      selectedAddress,
      searchButtonId,
      name,
      id,
      buildingNumber,
      unitNumber,
      buildingName,
      street,
      postCode,
      city,
      disabled,
      showFlatNumber
    } = this.props;

    if (!showAddressFields && !selectedAddress) {
      return (
        <AddressRow flexWrap="wrap" style={{ postion: 'relative' }} id={id}>
          <Box width={1}>
            <Label text={label} />
          </Box>
          {showFlatNumber && (
            <Box width={[1, 1, 1 / 3, 1 / 3]} pr={[0, 0, 2, 2]} mb={[2, 2, 0, 0]}>
              <TextInput
                name="flatNumberFilter"
                onChange={onChange}
                full
                placeholder="Flat/House Number"
                disabled={disabled}
              />
            </Box>
          )}
          <Box
            width={showFlatNumber ? [1, 1, 1 / 3, 1 / 3] : [1, 1, 1 / 3, 1 / 2]}
            pr={[0, 0, 2, 2]}
            mb={[2, 2, 0, 0]}
          >
            <TextInput
              name={fieldNames.search}
              onChange={onChange}
              full
              placeholder="Enter Postcode"
              onBlur={onBlur}
              required={!!errors[fieldNames.search] && touched[fieldNames.search]}
              error={
                !!errors[fieldNames.search] && touched[fieldNames.search]
                  ? errors[fieldNames.search]
                  : null
              }
              onKeyPress={e => {
                if (e.key === 'Enter' && !searching && postCodeSearch) {
                  this.handleSearch(e, postCodeSearch, flatNumberFilter);
                }
              }}
              disabled={disabled}
            />
          </Box>
          <Box width={[1, 1, 1 / 3, 1 / 3]}>
            <Button
              id={searchButtonId}
              full
              solid
              disabled={!postCodeSearch || searching || disabled}
              primary
              loadingText="Searching..."
              loading={searching}
              onClick={e => this.handleSearch(e, postCodeSearch, flatNumberFilter)}
            >
              Find Address
            </Button>
          </Box>

          {results != null && !showAddressFields && !disabled && (
            <AddressResults
              results={results}
              lastItem={{ title: "Can't find my address", value: -1 }}
              handleResultSelected={this.handleSelectedAddress}
            />
          )}
        </AddressRow>
      );
    }

    return (
      <AddressRow flexWrap="wrap" key={fieldNames.search}>
        <Box width={[1, 1 / 2, 1 / 2]} mb={[2, 0, 2, 2]} pr={[0, 2, 2]}>
          <TextInput
            labelText="Flat Number"
            full
            id={`#${fieldNames.unitNumber}`}
            name={fieldNames.unitNumber}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Flat number"
            value={unitNumber}
            required={
              errors[name] && touched[name] && !!errors[name].unitNumber && touched[name].unitNumber
            }
            error={
              errors[name] && touched[name] && errors[name].unitNumber
                ? errors[name].unitNumber
                : null
            }
          />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2]} mb={[2, 0, 2, 2]}>
          <TextInput
            labelText="House Name"
            full
            id={`#${fieldNames.buildingName}`}
            name={fieldNames.buildingName}
            placeholder="House name"
            onChange={onChange}
            onBlur={onBlur}
            value={buildingName}
            required={errors[name] && !!errors[name].buildingName && touched[name].buildingName}
            error={
              errors[name] && !!errors[name].buildingName && touched[name].buildingName
                ? errors[name].buildingName
                : null
            }
          />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2]} mb={[2, 0, 2, 2]} pr={[0, 2, 2]}>
          <TextInput
            labelText="House Number"
            full
            id={`#${fieldNames.buildingNumber}`}
            name={fieldNames.buildingNumber}
            placeholder="House number"
            onChange={onChange}
            onBlur={onBlur}
            value={buildingNumber}
            required={
              errors[name] &&
              touched[name] &&
              !!errors[name].buildingNumber &&
              touched[name].buildingNumber
            }
            error={
              errors[name] && touched[name] && errors[name].buildingNumber
                ? errors[name].buildingNumber
                : null
            }
          />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2]} mb={[2, 0, 2, 2]}>
          <TextInput
            labelText="Street Name"
            full
            id={`#${fieldNames.street}`}
            name={fieldNames.street}
            onChange={onChange}
            placeholder="Street Name"
            onBlur={onBlur}
            value={street}
            required={
              errors[name] && touched[name] && !!errors[name].street && touched[name].street
            }
            error={
              errors[name] && touched[name] && errors[name].street ? errors[name].street : null
            }
          />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2]} mb={[2, 0, 0]} pr={[0, 2, 2]}>
          <TextInput
            labelText="City/Town"
            full
            id={`#${fieldNames.city}`}
            name={fieldNames.city}
            placeholder="City/Town"
            onChange={onChange}
            onBlur={onBlur}
            value={city}
            required={errors[name] && touched[name] && !!errors[name].city && touched[name].city}
            error={errors[name] && touched[name] && errors[name].city ? errors[name].city : null}
          />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2]}>
          <TextInput
            labelText="Postcode"
            full
            id={`#${fieldNames.postCode}`}
            name={fieldNames.postCode}
            placeholder="Postcode e.g.: W6 7QE"
            onChange={onChange}
            onBlur={onBlur}
            value={postCode}
            required={
              errors[name] && touched[name] && !!errors[name].postCode && touched[name].postCode
            }
            error={
              errors[name] && touched[name] && errors[name].postCode ? errors[name].postCode : null
            }
          />
        </Box>
        <Box width={[1, 1, 1]} mt={[1, 1, 1]} style={{ textAlign: 'right' }}>
          <StyledLink target="_blank" onClick={() => this.clearSelectedAddress()}>
            Search Again
          </StyledLink>
        </Box>
      </AddressRow>
    );
  }
}

(AddressSelector as any).propTypes = {
  buildingNumber: PropTypes.string,
  postCode: PropTypes.string,
  city: PropTypes.string,
  street: PropTypes.string,
  buildingName: PropTypes.string,
  unitNumber: PropTypes.string,
  fieldNames: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      buildingNumber: PropTypes.string,
      postCode: PropTypes.string,
      city: PropTypes.string,
      street: PropTypes.string,
      buildingName: PropTypes.string,
      unitNumber: PropTypes.string
    })
  ),
  searching: PropTypes.bool,
  onButtonClick: PropTypes.func,
  selectedAddress: PropTypes.shape({}),
  setFieldValue: PropTypes.func.isRequired,
  onSelectedAddress: PropTypes.func.isRequired,
  postCodeSearch: PropTypes.string,
  flatNumberFilter: PropTypes.string,
  errors: PropTypes.shape({}),
  touched: PropTypes.shape({}).isRequired,
  label: PropTypes.string,
  searchButtonId: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  clearData: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  showFlatNumber: PropTypes.bool
};

(AddressSelector as any).defaultProps = {
  buildingNumber: '',
  postCode: '',
  city: '',
  street: '',
  buildingName: '',
  unitNumber: '',
  fieldNames: {
    buildingNumber: 'buildingNumber',
    postCode: 'postCode',
    city: 'city',
    street: 'street',
    buildingName: 'buildingName',
    unitNumber: 'unitNumber'
  },
  onChange: () => console.log('handle change event'),
  onBlur: () => console.log('handle blur event'),
  onButtonClick: () => console.log('button clicked'),

  results: [],
  searching: false,
  errors: {},
  selectedAddress: null,
  postCodeSearch: '',
  flatNumberFilter: '',
  label: 'Address',
  searchButtonId: '',
  id: '',
  name: '',
  disabled: false,
  showFlatNumber: true
};

export default AddressSelector;
