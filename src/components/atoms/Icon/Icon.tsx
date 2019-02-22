import * as React from "react";
import styled from "styled-components";
import { colors as defaultColors } from "../../../styles/defaults";

const StyledIcon = styled.i<{ reverse: boolean; solid: boolean } & any>`
  font-size: 24px;
  color: ${props => {
    if (props.reverse || props.solid) return "#fff";

    if (props.info) {
      return props.theme ? props.theme.colorInfo : defaultColors.info;
    }
    if (props.error) {
      return props.theme ? props.theme.colorDanger : defaultColors.danger;
    }
    if (props.success) {
      return props.theme ? props.theme.colorSuccess : defaultColors.success;
    }
    if (props.primary){
      return props.theme ? props.theme.colorPrimary : defaultColors.primary;
    }

    return defaultColors.darkGrey;
  }};
  padding: ${props => (props.circle ? "8px" : null)};
  border: ${props => {
    if (props.circle && !props.solid) {
      if (props.info) {
        return `1px solid ${props.theme ? props.theme.colorInfo : defaultColors.info}`;
      }
      if (props.error) {
        return `1px solid ${props.theme ? props.theme.colorDanger : defaultColors.danger}`;
      }
      if (props.success) {
        return `1px solid ${props.theme ? props.theme.colorSuccess : defaultColors.success}`;
      }
      if (props.primary) {
        return `1px solid ${props.theme ? props.theme.colorPrimary : defaultColors.primary}`;
      }
      return `1px solid ${defaultColors.darkGrey}`;
    }
    return null;
  }};
  border-radius: ${props => (props.circle ? "50%" : null)};
  background-color: ${props => {
    if (props.circle && props.solid) {
      if (props.info) {
        return props.theme ? props.theme.colorInfo : defaultColors.info;
      }
      if (props.error) {
        return props.theme ? props.theme.colorDanger : defaultColors.danger;
      }
      if (props.success) {
        return props.theme ? props.theme.colorSuccess : defaultColors.success;
      }

      return props.theme ? props.theme.colorPrimary : defaultColors.primary;
    }
    return null;
  }};
`;

interface Props extends React.HTMLAttributes<{}> {
  /** Render icon with primary color if defined in the theme */
  primary?: boolean;
  reverse?: boolean;
  name?: string;
  /** Render icon in a circle shape */
  circle?: boolean;
  error?: boolean;
  success?: boolean;
  info?: boolean;
  solid?: boolean;
  className?: string;
}

const Icon: React.SFC<Props> = ({
  name,
  primary,
  error,
  success,
  info,
  circle,
  solid,
  className,
  reverse,
  ...props
}) => {
  return (
    <StyledIcon
      className={`material-icons ${className}`}
      primary={primary}
      circle={circle}
      solid={solid}
      error={error}
      success={success}
      info={info}
      reverse={reverse}
      {...props}
    >
      {name}
    </StyledIcon>
  );
};

Icon.displayName = "Icon";

export default Icon;
