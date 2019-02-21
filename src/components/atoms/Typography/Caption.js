import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors as defaultColors } from "../../../styles/defaults";

const StyledCaption = styled.span`
  font-size: 12px;
  color: ${props => {
    if (props.required) return props.theme.colorDanger;

    if (props.theme) return props.theme.colorDefault;

    return defaultColors.default;
  }};
  display: block;
`;

const Caption = ({ required, text, ...props }) => {
  return (
    <StyledCaption required={required} {...props}>
      {text}
    </StyledCaption>
  );
};

Caption.propTypes = {
  text: PropTypes.string
};

Caption.defaultProps = {
  text: ""
};

export default Caption;
