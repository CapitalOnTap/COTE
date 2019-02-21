import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors as defaultColors } from "../../../styles/defaults";

interface Props {
  text: React.ReactNode;
  required?: boolean;
}

const StyledCaption = styled.span<{ required?: boolean }>`
  font-size: 12px;
  color: ${props => {
    if (props.required) return props.theme.colorDanger;

    if (props.theme) return props.theme.colorDefault;

    return defaultColors.default;
  }};
  display: block;
`;

const Caption: React.SFC<Props> = ({ required, text, ...props }) => {
  return (
    <StyledCaption required={required} {...props}>
      {text}
    </StyledCaption>
  );
};

Caption.propTypes = {
  text: PropTypes.any
};

Caption.defaultProps = {
  text: ""
};

export default Caption;
