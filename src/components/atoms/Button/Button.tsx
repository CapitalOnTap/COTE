import PropTypes from 'prop-types';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import withRipples from '../../../hocs/withRipples';
import elevationMixin from '../../../mixins/elevation';
import { hexToRgbA, isColorDark } from '../../../utils/index';
import Icon from '../Icon/Icon';
import { colors as defaultColors } from '../../../styles/defaults';

const primary = css`
  color: ${props => props.theme.colorPrimary};
  &:hover {
    background-color: ${props => hexToRgbA(props.theme.colorPrimary, 0.08)};
  }
`;

const secondary = css`
  color: ${props => props.theme.colorSecondary};
  &:hover {
    background-color: ${props => hexToRgbA(props.theme.colorSecondary, 0.08)};
  }
`;

const danger = css`
  color: ${props => props.theme.colorDanger};
  &:hover {
    background-color: ${props => hexToRgbA(props.theme.colorDanger, 0.08)};
  }
`;

const outline = css<{
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
}>`
  ${props =>
    `
      border: 1px solid ${props.theme.colorDefault};
  `};

  ${props =>
    props.disabled &&
    `
      border: 1px solid ${props.theme.colorLightGrey};
  `};

  ${props =>
    props.primary &&
    `
    color:${props.theme.colorPrimary};
      border: 1px solid ${props.theme.colorPrimary};
      &:hover{
        background-color: ${props => hexToRgbA(props.theme.colorPrimary, 0.08)};
      }
  `};

  ${props =>
    props.secondary &&
    `
    color:${props.theme.colorSecondary};
      border: 1px solid ${props.theme.colorSecondary};
      &:hover{
        background-color: ${props => hexToRgbA(props.theme.colorSecondary, 0.08)};
      }
  `};

  ${props =>
    props.danger &&
    `
    color:${props.theme.colorDanger};
      border: 1px solid ${props.theme.colorDanger};
      &:hover{
        background-color: ${props => hexToRgbA(props.theme.colorDanger, 0.08)};
      }
  `};
`;

const solid = css<{
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  selected?: boolean; // Set if button is part of ButtonGroup and selected
}>`
  ${elevationMixin(2)}

  &:active {
    ${elevationMixin(8)}
  }

  ${props => {
    if (props.disabled) {
      return `
  background-color: ${props => props.theme.colorLightGrey};
  pointer-events: none;
`;
    }

    let backgroundColor = props.selected
      ? props.theme.colorDefault
      : hexToRgbA(props.theme.colorDefault, 0.7);
    let hoverBackgroundColor = props.theme.colorDefault;

    if (props.primary) {
      backgroundColor = props.theme.colorPrimary;
      hoverBackgroundColor = props.theme.colorPrimaryEmphasis;
    }
    if (props.secondary) {
      backgroundColor = props.theme.colorSecondary;
      hoverBackgroundColor = props.theme.colorSecondaryEmphasis;
    }
    if (props.danger) {
      backgroundColor = props.theme.colorDanger;
      hoverBackgroundColor = props.theme.colorDangerEmphasis;
    }

    const textColor = isColorDark(backgroundColor) ? 'white' : props.theme.colorDefault;

    return `
  color: ${textColor};
  background-color: ${backgroundColor};
  &:before {
    color: black;
  }

  &:hover{
    background-color: ${hoverBackgroundColor};
  }
`;
  }}
`;

interface StyledButtonProps {
  primary?: boolean;
  secondary?: boolean;
  solid?: boolean;
  danger?: boolean;
  outline?: boolean;
  small?: boolean;
  large?: boolean;
  full?: boolean;
  elevation?: number;
  disabled?: boolean;
  selected?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  color: ${props => props.theme.colorDefault};
  display: inline-block;
  position: relative;
  min-width: 88px;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 2px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  vertical-align: middle;
  user-select: none;
  box-sizing: border-box;
  -webkit-appearance: none;
  transition: all 250ms ease;
  background-color: ${props => (props.disabled ? props.theme.colorLightGrey : 'transparent')};

  &:hover {
    cursor: pointer;
    background-color: ${props => hexToRgbA(props.theme.colorDefault, 0.08)};
  }
  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  ${props => props.solid && solid}
  ${props => props.outline && outline}
  ${props => !props.solid && !props.outline && props.primary && primary}
  ${props => !props.solid && !props.outline && props.secondary && secondary}
  ${props => !props.solid && !props.outline && props.danger && danger}
  ${props =>
    props.small &&
    `padding: 0px 8px;
    min-width: 64px;
    font-size: 0.8rem;
    height: 32px; 
    line-height: 32px;
    `}

     ${props =>
       props.large &&
       `padding: 0px 24px;
        min-width: 112px
        font-size: 1.2rem;
        height: 44px; 
        line-height: 44px;
        `}

${props => props.full && `width: 100%;`}
    ${props =>
      props.disabled &&
      `
    color: rgba(0, 0, 0, .26);
    cursor: default;
    pointer-events: none;
  `}

  ${props => props.elevation && elevationMixin(props.elevation)}
`;

export const StyledLinkButton = styled(StyledButton.withComponent('a'))<
  React.LinkHTMLAttributes<{}>
>``;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled(Icon)<{ withText?: boolean }>`
  color: inherit;
  margin-right: ${props => (props.withText ? '8px' : null)};
  animation: ${rotate360} 2s linear infinite;
  /* font-size: inherit; */
`;

const LoadingWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonWithRipple = styled(withRipples(StyledButton))<{
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  solid?: boolean;
}>`
  > s {
    background-color: ${props => {
      if (props.danger) return props.theme ? props.theme.colorDanger : defaultColors.danger;
      if (props.primary) return props.theme ? props.theme.colorPrimary : defaultColors.primary;
      if (props.secondary)
        return props.theme ? props.theme.colorSecondary : defaultColors.secondary;
      if (props.solid) return props.theme ? props.theme.colorDarkGrey : defaultColors.darkGrey;
      return props.theme ? props.theme.colorDefault : defaultColors.default;
    }};
  }
`;

interface Props extends StyledButtonProps, React.ButtonHTMLAttributes<{}> {
  icon?: string;
  className?: string;
  href?: string;
  loading?: boolean;
  loadingText?: any;
}

const Button: React.SFC<Props> = (props: Props) => {
  const { children, icon, className, disabled, href, loading, loadingText, id, ...rest } = props;

  if (href) {
    return (
      <StyledLinkButton {...rest} disabled={disabled} href={href} id={id}>
        {loading && <LoadingIcon name={'refresh'} />}
        {children}
        {icon && <Icon className={`fa fa-${icon} ${className}`} />}
      </StyledLinkButton>
    );
  }

  return (
    <ButtonWithRipple {...rest} disabled={disabled || loading} id={id}>
      {loading && (
        <LoadingWrapper>
          <LoadingIcon name="refresh" withText={!!loadingText} /> {loadingText}
        </LoadingWrapper>
      )}
      {!loading && children}
      {icon && <Icon name={icon} />}
    </ButtonWithRipple>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  href: PropTypes.string,
  /** Name of the icon as per material.io/icons */
  icon: PropTypes.string,
  solid: PropTypes.bool,
  full: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  /** With border outline */
  outline: PropTypes.bool,
  /** Shows a loading animated icon */
  loading: PropTypes.bool,
  /** Text visible when loading animation is set */
  loadingText: PropTypes.string,
  //** Adds material design shadow elevation */
  elevation: PropTypes.number,
  danger: PropTypes.bool,
  //** True if in ButtonGroup and selected */
  selected: PropTypes.bool
};

Button.defaultProps = {
  elevation: 0,
  primary: false,
  solid: false,
  href: '',
  disabled: false,
  type: 'button',
  icon: '',
  full: false,
  danger: false,
  selected: false
};

export default Button;
