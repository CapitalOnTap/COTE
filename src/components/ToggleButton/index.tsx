import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Paper from '../Paper/Paper';

const Wrapper = styled.div<{ disabled?: boolean; isActive?: boolean }>`
  border-radius: 50px;
  height: 1rem;
  z-index: 1;

  width: 2.4rem;
  position: relative;
  background: ${props => {
    if (props.disabled) {
      return props.theme ? props.theme.colorLightGrey : defaultColors.lightGrey;
    }

    if (props.isActive) {
      return props.theme ? props.theme.colorPrimary : defaultColors.primary;
    }
    return props.theme ? props.theme.colorDanger : defaultColors.danger;
  }};

  transition: background 150ms ease-in;
`;

const Circle = styled(Paper)<{ isActive?: boolean }>`
  min-width: 0;
  min-height: 0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 0;
  position: absolute;
  background: #fff;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  z-index: 2;

  left: ${props => (props.isActive ? '2.4rem' : 0)};
  transition: left 250ms ease;
`;

const HiddenInput = styled.input`
  z-index: 2;
  border: 0;
  background: transparent;
  visibility: hidden;
  width: 2.4rem;
  height: 1rem;
  display: inline-block;
`;

interface Props {
  disabled?: boolean;
  isActive?: boolean;
  onButtonClicked: (
    isActive: boolean,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

interface State {
  isActive: boolean;
}

class ToggleButton extends PureComponent<Props, State> {
  state = {
    isActive: false
  };

  handleButtonClicked = e => {
    const { disabled } = this.props;

    if (disabled) return;

    this.setState({ isActive: !this.state.isActive }, () =>
      this.props.onButtonClicked(!this.state.isActive, e)
    );
  };

  render() {
    const isActive =
      typeof this.props.isActive !== 'undefined'
        ? this.props.isActive
        : this.state.isActive;

    const { disabled } = this.props;

    return (
      <Wrapper
        isActive={isActive}
        onClick={this.handleButtonClicked}
        disabled={disabled}
      >
        <Circle isActive={isActive} />
        <HiddenInput type="checkbox" />
      </Wrapper>
    );
  }
}

(ToggleButton as any).propTypes = {
  onButtonClicked: PropTypes.func,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool
};

(ToggleButton as any).defaultProps = {
  onButtonClicked: isActive => console.log(isActive),
  isActive: false,
  disabled: false
};

export default ToggleButton;
