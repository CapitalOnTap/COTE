import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/defaults';

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Container = styled.label<{ checked?: boolean }>`
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 1rem;
  color: ${props => (props.checked ? 'initial' : colors.darkGrey)};
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input:checked + span:after {
    display: block;
  }

  input:checked + span {
    border: 2px solid
      ${props => (props.theme ? props.theme.colorPrimary : colors.primary)};
  }

  input:checked & {
    color: red;
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 24px;
  width: 24px;
  background-color: #fff;
  border: 2px solid ${colors.darkGrey};
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
    background: ${props =>
      props.theme ? props.theme.colorPrimary : colors.primary};
    content: '';
    position: absolute;
    display: none;
  }
`;

interface Props {
  label: string;
  name: string;
  checked?: boolean;
  onChange: (value: any) => void;
  value?: any;
}

const RadioButton: React.SFC<Props> = ({
  label,
  name,
  checked,
  onChange,
  value
}) => {
  return (
    <div>
      <Container checked={checked}>
        {label}
        <Input
          type="radio"
          name={name}
          checked={checked}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <Checkmark />
      </Container>
    </div>
  );
};

(RadioButton as any).propTypes = {
  label: PropTypes.node,
  name: PropTypes.string,
  checked: PropTypes.bool,
  /** Returns value of radio button */
  onChange: PropTypes.func,
  /** Value of radio button */
  value: PropTypes.any
};

RadioButton.defaultProps = {
  label: 'label',
  name: 'radio',
  onChange: value => console.log(value)
};

export default RadioButton;
