import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';

const Wrapper = styled.div`
  display: block;
  position: relative;
  height: 24px;
  & input[type='checkbox'] {
    display: none;
  }

  & input[type='checkbox']:checked + span > i {
    opacity: 1;
  }
  & input:disabled + span {
    background-color: ${props => props.theme.colorLightGrey};
  }
`;

const Box = styled.span<{ primary?: boolean; secondary?: boolean; invalid?: boolean }>`
  color: ${props => {
    if (props.primary) {
      return '#fff';
    }
    return props.theme ? props.theme.colorDefault : defaultColors.default;
  }};
  position: relative;
  display: inline-block;
  border: ${props => {
    if ((props.primary || props.secondary) && !props.invalid) return null;

    if (props.invalid && props.theme) {
      return `1px solid ${props.theme.colorDanger}`;
    }

    if (props.invalid) {
      return `1px solid ${defaultColors.danger}`;
    }

    return `1px solid ${defaultColors.darkGrey}`;
  }};
  border-radius: 0.25em;
  width: 24px;
  min-width: 24px;
  height: 24px;
  float: left;
  margin-right: 0.5em;
  background-color: ${props => {
    if (props.primary) return props.theme ? props.theme.colorPrimary : defaultColors.primary;
    if (props.secondary) return props.theme ? props.theme.colorSecondary : defaultColors.secondary;
    return '#fff';
  }};
  transition: background-color 0.3s ease-in;
`;

const CheckMark = styled.i`
  opacity: 0;
  position: absolute;
  font-size: 22px;
  line-height: 0;
  top: 50%;
  left: 0;
  transition: background-color 0.3s ease-in;
`;

const HiddenInput = styled.input`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
`;

const WrappingLabel = styled.label`
  min-height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

interface Props {
  handleClicked: (value: boolean) => void;
  label: string;
  name: string;
  primary?: boolean;
  secondary?: boolean;
  id?: string;
  invalid?: boolean;
  checked?: boolean;
}

interface State {
  checked: boolean;
}

class Checkbox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  handleValueChange = (val: boolean) => {
    this.setState({ checked: !val }, () => this.props.handleClicked(!val));
  };

  render() {
    const { label, name, primary, secondary, id, invalid } = this.props;
    // Use prop instead of state, if provided
    const checked = this.props.checked || this.state.checked;

    return (
      <Wrapper {...this.props} id={id}>
        <WrappingLabel>
          <HiddenInput
            name={name}
            type="checkbox"
            onChange={e => {
              this.handleValueChange(checked);
            }}
            checked={checked}
            value={checked ? 1 : 0}
            {...this.props}
          />
          <Box primary={primary} secondary={secondary} invalid={invalid}>
            <CheckMark className="material-icons">check</CheckMark>
          </Box>
          <label>{label}</label>
        </WrappingLabel>
      </Wrapper>
    );
  }
}

(Checkbox as any).propTypes = {
  label: PropTypes.string,
  handleClicked: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  invalid: PropTypes.bool,
  checked: PropTypes.bool
};

(Checkbox as any).defaultProps = {
  label: '',
  handleClicked: val => console.log(val),
  primary: false,
  secondary: false,
  invalid: false
};

export default Checkbox;
