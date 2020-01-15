import React from 'react';
import styled from 'styled-components';

interface Props {
  size: number;
  background?: string;
  content?: React.ReactNode;
  color?: string;
  reverse?: boolean;
}

const StyledBadge = styled.div<{
  color?: string;
  size: number;
  background?: string;
  reverse?: boolean;
}>`
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  line-height: ${props => props.size + 'px'};
  font-size: ${props => props.size / 2 + 'px'};
  text-align: center;
  border-radius: ${props => props.size + 'px'};
  background: ${props => {
    const color = props.color ? props.color : '#fff';
    const bgColor = props.background ? props.background : props.theme.colorPrimary;
    return props.reverse === true ? color : bgColor;
  }};
  color: ${props => {
    const color = props.color ? props.color : '#fff';
    const bgColor = props.background ? props.background : props.theme.colorPrimary;
    return props.reverse === true ? bgColor : color;
  }};
`;

const Badge: React.SFC<Props> = ({ content, size = 48, background, color, reverse, ...props }) => {
  return (
    <StyledBadge size={size} background={background} color={color} reverse={reverse} {...props}>
      {content}
    </StyledBadge>
  );
};

export default Badge;
