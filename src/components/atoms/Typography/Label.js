import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors as defaultColors } from "../../../styles/defaults";

const StyledLabel = styled.label`
  color: ${props => {
    if (props.required) return props.theme.colorDanger;

    if (props.theme) return props.theme.colorDefault;

    return defaultColors.default;
  }};

  font-size: 1em;
  display: block;
  margin-bottom: 8px;
`;

const Label = ({ text, required, ...props }) => {
  return (
    <StyledLabel required={required} {...props}>
      {text}
    </StyledLabel>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  info: PropTypes.string
};

Label.defaultProps = {
  text: "Label",
  info:
    "If you have any problems, please contact us on 0208 9627 400. Monday - Friday, 9 am- 6pm."
};

export default Label;
