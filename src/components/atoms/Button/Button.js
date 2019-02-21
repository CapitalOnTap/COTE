import PropTypes from "prop-types";
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { colors as defaultColors } from "../../../styles/defaults";
import Icon from "../Icon/Icon";

const boxShadow = `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);`;

export const StyledButton = styled.button`
  transition: all 1s ease-in;
  height: 38px;
  font-family: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: ${props => {
    if (props.disabled) return defaultColors.darkGrey;

    if (props.danger && props.solid) return props.theme.colorDanger;

    if (props.solid && props.primary) return props.theme.colorPrimary;

    return "transparent";g
  }};

  color: ${props => {
    if (props.solid || props.disabled) return "#fff";

    if (props.primary) {
      return props.theme.colorPrimary;
    }

    if (props.danger) {
      return props.theme.colorDanger;
    }

    return props.theme.colorBlack;
  }};

  @media only screen and (min-width: 640px) {
    font-size: 14px;
  }
  font-size: 12px;

  padding: 9px 16px;
  width: ${props => {
    if (props.small) return "16px";

    if (props.large) return "448px";
    if (props.full) return "100%";
  }};
  opacity: ${props => {
    if (!props.solid) return "0.7";
  }};
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.25s ease-in;
  font-weight: bold;

  :disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${props => {
      if (props.disabled) return defaultColors.darkGrey;

      if (props.danger && props.theme && props.solid)
        return props.theme.colorDanger;

      if (props.danger && props.solid) return defaultColors.danger;

      if (props.theme && props.solid) return props.theme.colorPrimaryEmphasis;

      if (props.solid) return defaultColors.primaryEmphasis;
    }};

    opacity: ${props => {
      if (props.disabled) return;
      if (!props.solid) return "1";
    }};
  }

  @media screen and (max-width: 448px) {
    width: ${props => {
      if (props.small) return "16px";
      if (props.large) return "224px";
      if (props.full) return "100%";
    }};
  }

  border: ${props => {
    if (props.solid || props.disabled) {
      return "none";
    }

    return "1px solid currentColor";
  }};

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-block;
  position: relative;
  text-align: center;
  ${props => (props.shadow ? boxShadow : null)};

  i {
    color: inherit;
  }
`;

export const StyledLinkButton = StyledButton.withComponent("a");

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled(Icon)`
  color: inherit;
  margin-right: ${props => (props.withText ? "8px" : null)};
  animation: ${rotate360} 2s linear infinite;
  /* font-size: inherit; */
`;

const LoadingWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
class Button extends Component {
  render() {
    const {
      onClick,
      children,
      icon,
      className,
      disabled,
      href,
      loading,
      loadingText,
      id
    } = this.props;
    if (href) {
      return (
        <StyledLinkButton
          {...this.props}
          disabled={disabled}
          href={href}
          id={id}
        >
          {loading && <LoadingIcon name={"refresh"} />}
          {children}
          {icon && <Icon className={`fa fa-${icon} ${className}`} />}
        </StyledLinkButton>
      );
    }

    return (
      <StyledButton {...this.props} disabled={disabled || loading} id={id}>
        {loading && (
          <LoadingWrapper>
            <LoadingIcon name="refresh" withText={!!loadingText} />{" "}
            {loadingText}
          </LoadingWrapper>
        )}
        {!loading && children}
        {icon && <Icon name={icon} />}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  solid: PropTypes.bool,
  full: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  /** Shows a loding animated icon */
  loading: PropTypes.bool,
  /** Text visible when loading animation is set */
  loadingText: PropTypes.string
};

Button.defaultProps = {};

export default Button;
