import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Icon from '../atoms/Icon/Icon';
import { Caption } from '../atoms/Typography/index';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import Button from '../atoms/Button/Button';
import Paper from '../Paper/Paper';

const ResultWrapper = styled(Paper)<WrapperProps>`
  position: absolute;
  top: ${props => (props.small ? '20px' : '48px')};
  min-height: auto;
  max-height: 17em;
  overflow: auto;
  min-width: 65px;
  left: 0;
  padding: 0;
  z-index: 999;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14);
  white-space: nowrap;
  width: 100%;
`;

const ArrowIcon = styled(Icon)<React.HTMLAttributes<{}>>`
  position: absolute;
  z-index: 1;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: ${defaultColors.default};
  cursor: pointer;
`;

interface WrapperProps extends React.HTMLAttributes<{}> {
  full?: boolean;
  error?: string;
  disabled?: boolean;
  small?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  min-width: 66px;
  display: inline-block;
  /* width: ${props => (props.full ? '100%' : '232px')}; */
  user-select: none;
  outline: none;
  &[disabled] {
    background-color: ${props => props.theme.colorLightGrey};
    color: rgba(0, 0, 0, 0.26);
  }
`;
const StyledButton = styled(Button)`
  ${props => (props.small ? 'font-size: 12px' : '')};
  ${props => (props.small ? 'height: 20px' : '')};
  ${props => (props.small ? 'line-height: 20px' : '')};
  padding-right: 5px;
  i {
    ${props => (props.small ? 'font-size: 12px' : '')};
    ${props => (props.small ? 'line-height: 20px' : '')};
    float: right;
    padding: ${props => (props.small ? '0 0 0 6px' : '6px 0 0 6px')};
  }
`;

interface Props extends WrapperProps {
  text?: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  solid?: boolean;
  danger?: boolean;
  outline?: boolean;
  small?: boolean;
}

interface State {
  isOpen: boolean;
}

class DropdownButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }

    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutsideDropdown = () => {
    this.setState({ isOpen: false });
  };

  renderButtonText = title => {
    return (
      <React.Fragment>
        {title}
        <ArrowIcon name="keyboard_arrow_down" onClick={this.handleClick} />
      </React.Fragment>
    );
  };

  render() {
    const { isOpen } = this.state;
    const {
      children,
      text,
      error,
      full,
      id,
      disabled,
      primary,
      danger,
      secondary,
      outline,
      solid,
      small
    } = this.props;

    /* Check if this is controlled by the parent, if yes, use the one from the parent */
    // const selectedOption = isControllable ? this.props.selectedOption : this.state.selectedOption;
    return (
      <OutsideAlerter handleClickOutsideElement={this.handleClickOutsideDropdown}>
        <Wrapper error={error} full={full} id={id} tabIndex={0}>
          <StyledButton
            primary={primary}
            danger={danger}
            secondary={secondary}
            solid={solid}
            outline={outline}
            onClick={this.handleClick}
            icon={!isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
            small={small}
          >
            {text}
          </StyledButton>
          {isOpen && !disabled ? (
            <ResultWrapper small={small} onClick={() => this.setState({ isOpen: false })}>
              {children}
            </ResultWrapper>
          ) : null}
        </Wrapper>
        {error && <Caption required text={error} />}
      </OutsideAlerter>
    );
  }
}

(DropdownButton as any).propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  solid: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool
};

(DropdownButton as any).defaultProps = {
  primary: false,
  secondary: false,
  solid: false,
  danger: false,
  outline: false,
  disabled: false
};

export default DropdownButton;
