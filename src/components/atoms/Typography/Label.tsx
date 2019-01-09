import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../styles/defaults';

interface Props {
  text: React.ReactNode;
  required?: boolean;
}

const StyledLabel = styled.label<{ required?: boolean }>`
  color: ${props => {
    if (props.required) return props.theme.colorDanger;

    if (props.theme) return props.theme.colorBlack;

    return colors.black;
  }};

  font-size: 1em;
  display: block;
  margin-bottom: 8px;
`;

const Label: React.SFC<Props> = ({ text, required }) => {
  return <StyledLabel required={required}>{text}</StyledLabel>;
};

Label.propTypes = {
  text: PropTypes.any
};

Label.defaultProps = {
  text: 'Label'
};

export default Label;
