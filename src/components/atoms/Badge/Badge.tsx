import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

interface Props {
  size: number;
  background: string;
  content: React.ReactNode;
  color: string;
}

const StyledBadge = styled.div<{
  color: string;
  size: number;
  background: string;
}>`
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};
  line-height: ${props => props.size + "px"};
  font-size: ${props => props.size / 2 + "px"};
  text-align: center;
  border-radius: ${props => props.size + "px"};
  background: ${props => props.background};
  color: ${props => props.color};
`;

const Badge: React.SFC<Props> = ({
  content,
  size,
  background,
  color,
  ...props
}) => {
  return (
    <StyledBadge size={size} background={background} color={color} {...props}>
      {content}
    </StyledBadge>
  );
};

(Badge as any).propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string
};

Badge.defaultProps = {
  size: 48,
  color: "white",
  background: "#27b161"
};

export default Badge;
