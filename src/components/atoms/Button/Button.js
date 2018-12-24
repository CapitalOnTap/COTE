import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import withRipple from '../../../hocs/withRipple';
import elevationMixin from '../../../mixins/elevation';
import rippleMixin from '../../../mixins/ripple';
import { hexToRgbA } from '../../../utils';
import Icon from '../Icon/Icon';

const boxShadow = `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);`;

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

const outline = css`
  ${props =>
    `
      border: 1px solid ${props.theme.colorBlack};
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

const solid = css`
  ${elevationMixin(2)}

  &:active{
    ${elevationMixin(8)}
  }

  ${props =>
    `
    color: white;
    background-color: ${hexToRgbA(props.theme.colorBlack, 0.7)};
    &:before {
      color: black;
    }

    &:hover{
      background-color: ${props.theme.colorBlack};
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
      background-color: ${props.theme.colorPrimaryDark};
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

export const StyledButton = styled.button`
  color: ${props => props.theme.colorBlack};
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

  &:hover {
    cursor: pointer;
    background-color: ${props => hexToRgbA(props.theme.colorBlack, 0.08)};
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

  ${rippleMixin()}
`;

export const StyledLinkButton = StyledButton.withComponent('a');

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
  margin-right: ${props => (props.withText ? '8px' : null)};
  animation: ${rotate360} 2s linear infinite;
  /* font-size: inherit; */
`;

const LoadingWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonWithRipple = withRipple(StyledButton);
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
          href={href === 3}
          id={id}
        >
          {loading && <LoadingIcon name={'refresh'} />}
          {children}
          {icon && <Icon className={`fa fa-${icon} ${className}`} />}
        </StyledLinkButton>
      );
    }

    return (
      <ButtonWithRipple {...this.props} disabled={disabled || loading} id={id}>
        {loading && (
          <LoadingWrapper>
            <LoadingIcon name="refresh" withText={!!loadingText} />{' '}
            {loadingText}
          </LoadingWrapper>
        )}
        {!loading && children}
        {icon && <Icon name={icon} />}
      </ButtonWithRipple>
    );
  }
}

Button.propTypes = {
  primary: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
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
  loadingText: PropTypes.string
};

Button.defaultProps = {
  primary: false,
  solid: false,
  href: '',
  type: 'button',
  disabled: false,
  icon: '',
  full: false
};

export default Button;
