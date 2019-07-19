import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors as defaultColors, theme } from '../../styles/defaults';

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Container = styled.label<{ checked?: boolean; inline?: boolean; disabled?: boolean }>`
  display: inline-block;
  position: relative;
  padding: ${props => (props.inline ? '9px 45px 9px 45px' : '0 0 0 35px')};
  margin: ${props => (props.inline ? '0 1rem 1rem 0' : '0 0 1rem 0')};
  color: ${props => (props.checked ? 'initial' : defaultColors.darkGrey)};
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: ${props => (props.inline ? `1px solid ${props.theme.colorDefault}` : 'none')};
  border-radius: ${props => (props.inline ? '4px' : 'none')};
  font-weight: ${props => (props.checked ? '600' : '100')};
  min-width: 108px;

  &[disabled] {
    background-color: ${theme.colorLightGrey};
    cursor: default;
    span {
      background: transparent;
    }
  }

  input:checked + span:after {
    display: block;
  }

  input:checked + span {
    border: 2px solid ${props => (props.theme ? props.theme.colorPrimary : defaultColors.primary)};
  }

  input:checked & {
    color: red;
  }
`;

const Checkmark = styled.span<{ inline?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => (props.inline ? '10px' : '0')};
  height: 24px;
  width: 24px;
  background-color: #fff;
  border: 2px solid ${defaultColors.darkGrey};
  border-radius: 50%;
  z-index: 5;
  &&:after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => (props.theme ? props.theme.colorPrimary : defaultColors.primary)};
    content: '';
    position: absolute;
    display: none;
  }
`;

const Wrapper = styled.div<{ inline?: boolean }>`
  display: ${props => (props.inline ? 'inline' : 'block')};
`;
interface Props {
  label?: React.ReactNode;
  name?: string;
  checked?: boolean;
  onChange?: (value: any) => void;
  value?: any;
  inline?: boolean;
  disabled?: boolean;
}

const RadioButton: React.SFC<Props> = ({
  label,
  name,
  checked,
  onChange,
  value,
  inline,
  disabled,
  ...props
}) => {
  return (
    <Wrapper inline={inline}>
      <Container {...props} checked={checked} inline={inline} disabled={disabled}>
        {label}
        <Input
          type="radio"
          name={name}
          checked={checked}
          value={value}
          disabled={disabled}
          onChange={e => onChange && onChange(e.target.value)}
        />
        <Checkmark inline={inline} />
      </Container>
    </Wrapper>
  );
};

(RadioButton as any).propTypes = {
  label: PropTypes.node,
  name: PropTypes.string,
  checked: PropTypes.bool,
  /** Returns value of radio button */
  onChange: PropTypes.func,
  /** Value of radio button */
  value: PropTypes.any,
  inline: PropTypes.bool,
  disabled: PropTypes.bool
};

RadioButton.defaultProps = {
  label: 'label',
  name: 'radio',
  onChange: value => console.log(value)
};

export default RadioButton;
