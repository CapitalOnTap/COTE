import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/defaults';

const StyledIcon = styled.i<{ reverse: boolean; solid: boolean } & any>`
  font-size: 24px;
  color: ${props => {
    if (props.reverse || props.solid) return '#fff';

    if (props.primary && props.theme) return props.theme.colorPrimary;

    if (props.error && props.theme) return props.theme.colorDanger;

    return colors.darkGrey;
  }};
  padding: ${props => (props.circle ? '8px' : null)};
  border: ${props => {
    if (props.primary && props.theme && props.circle && !props.solid)
      return `1px solid ${props.theme.colorPrimary}`;

    if (props.primary && props.circle && !props.solid)
      return `1px solid ${colors.primary}`;

    if (props.circle && !props.solid) return `1px solid ${colors.darkGrey}`;

    return null;
  }};
  border-radius: ${props => (props.circle ? '50%' : null)};
  background-color: ${props => {
    if (props.circle && props.solid && props.theme)
      return props.theme.colorPrimary;
    if (props.circle && props.solid) return colors.primary;
    return null;
  }};
`;

interface Props {
  /** Render icon with primary color if defined in the theme */
  primary?: boolean;
  reverse?: boolean;
  name?: string;
  /** Render icon in a circle shape */
  circle?: boolean;
  error?: boolean;
  solid?: boolean;
  className?: string;
}

const Icon: React.SFC<Props> = ({
  name,
  primary,
  error,
  circle,
  solid,
  className,
  reverse
}) => {
  return (
    <StyledIcon
      className={`material-icons ${className}`}
      primary={primary}
      circle={circle}
      solid={solid}
      error={error}
      reverse={reverse}
    >
      {name}
    </StyledIcon>
  );
};

Icon.displayName = 'Icon';

export default Icon;
