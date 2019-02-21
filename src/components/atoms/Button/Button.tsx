import PropTypes from 'prop-types';
import React from 'react';
import styled, { css, keyframes, withTheme } from 'styled-components';
import withRipples from '../../../hocs/withRipples';
import elevationMixin from '../../../mixins/elevation';
import { Theme } from '../../../styles/types';
import { hexToRgbA } from '../../../utils/index';
import Icon from '../Icon/Icon';

const primary = css`
  color: ${props => props.theme.colorPrimary};
  &:hover {
    background-color: ${props => hexToRgbA(props.theme.colorPrimary, 0.08)};
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
  danger?: boolean;
}>`
  ${props =>
    `
      border: 1px solid ${props.theme.colorDefault};
  `};

  ${props =>
    props.disabled &&
    `
      border: 1px solid rgba(0, 0, 0, .26);
  `};

  ${props =>
    props.primary &&
    `
      border: 1px solid ${props.theme.colorPrimary};
      &:hover{
        background-color: ${props => hexToRgbA(props.theme.colorPrimary, 0.08)};
      }
  `};

  ${props =>
    props.danger &&
    `
      border: 1px solid ${props.theme.colorDanger};
      &:hover{
        background-color: ${props => hexToRgbA(props.theme.colorDanger, 0.08)};
      }
  `};
`;

const solid = css<{ primary?: boolean; danger?: boolean; disabled?: boolean }>`
  ${elevationMixin(2)}

  &:active{
    ${elevationMixin(8)}
  }

  ${props =>
    `
    color: white;
    background-color: ${hexToRgbA(props.theme.colorDefault, 0.7)};
    &:before {
      color: black;
    }

    &:hover{
      background-color: ${props.theme.colorDefault};
    }
  `}

  ${props =>
    props.primary &&
    `
    color: white;
    background-color: ${props.theme.colorPrimary};
    &:before {
      color: black;
    }

     &&:hover{
      background-color: ${props.theme.colorPrimaryEmphasis};
    }
  `}

  ${props =>
    props.danger &&
    `
    color: white !important;
    background-color: ${props.theme.colorDanger};
    &:before {
      color: black;
    }

     &&:hover{
      background-color: ${props.theme.colorDangerDark} ;
    }
  `}

  ${props =>
    props.disabled &&
    `
    background-color: rgba(0, 0, 0, .12);
    pointer-events: none;
  `}
`;

interface StyledButtonProps {
  primary?: boolean;
  solid?: boolean;
  danger?: boolean;
  outline?: boolean;
  small?: boolean;
  large?: boolean;
  full?: boolean;
  elevation?: number;
  disabled?: boolean;
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
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: ${props => hexToRgbA(props.theme.colorDefault, 0.08)};
  }
  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  ${props => props.primary && primary}
  ${props => props.solid && solid}
  ${props => props.danger && danger}
  ${props => props.outline && outline}
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

interface RippleButtonProps extends StyledButtonProps {
  theme: Theme;
}

const getRippleColor = (buttonProps: RippleButtonProps) => {
  if (buttonProps.primary && buttonProps.solid)
    return buttonProps.theme.colorPrimary;
  if (buttonProps.danger && buttonProps.solid)
    return buttonProps.theme.colorDanger;
  if (!buttonProps.danger && !buttonProps.primary && buttonProps.solid)
    return buttonProps.theme.colorDarkGrey;

  if (buttonProps.danger) return buttonProps.theme.colorDanger;
  if (buttonProps.primary) return buttonProps.theme.colorPrimary;

  return 'rgba(0, 0, 0, 0.06)';
};

const ButtonWithRipple = withRipples(StyledButton);

interface Props extends RippleButtonProps, React.ButtonHTMLAttributes<{}> {
  icon?: string;
  className?: string;
  href?: string;
  loading?: boolean;
  loadingText?: string;
}

const Button: React.SFC<Props> = (props: Props) => {
  const {
    children,
    icon,
    className,
    disabled,
    href,
    loading,
    loadingText,
    id
  } = props;

  if (href) {
    return (
      <StyledLinkButton {...props} disabled={disabled} href={href} id={id}>
        {loading && <LoadingIcon name={'refresh'} />}
        {children}
        {icon && <Icon className={`fa fa-${icon} ${className}`} />}
      </StyledLinkButton>
    );
  }

  return (
    <ButtonWithRipple
      {...props}
      disabled={disabled || loading}
      id={id}
      color={getRippleColor(props)}
    >
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
  danger: PropTypes.bool
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
  danger: false
};

export default withTheme(Button);
