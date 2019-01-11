import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Icon from '../atoms/Icon/Icon';

const ArrowIcon = styled(Icon)<React.HTMLAttributes<{}>>`
  position: absolute;
  z-index: 1;
  right: 8px;
  top: 24px;
  transform: translateY(-50%);
  color: ${defaultColors.black};
  cursor: pointer;
`;

const Wrapper = styled.div<{ isOpen?: boolean }>`
  position: relative;
  min-width: 232px;
  width: 100%;
  cursor: pointer;
  transition: all 350ms ease-in-out;

  ${props =>
    props.isOpen &&
    `
    max-height: 1000px;  `}

  ${props => !props.isOpen && `max-height: 48px;`}
`;

const TopWrapper = styled.div<{
  border?: boolean;
  underline?: boolean;
  corners?: boolean;
}>`
  border: ${props => (props.border ? `1px solid ${defaultColors.black}` : '0')};
  border-bottom: ${props =>
    props.underline
      ? `1px solid #eeeeee`
      : props.border
      ? '1px solid ${defaultColors.black}'
      : '0'};
  border-radius: ${props => (props.corners ? '0' : '4px')};
  padding: 9px 16px;
  height: 48px;
  background: #ffffff;
`;

const DetailCardWrapper = styled.div<{ isOpen?: boolean }>`
  top: 48px;
  width: 100%;
  left: 0;
  padding: 0;
  transition: all 350ms ease-in-out;
  height: ${props => (!props.isOpen ? '0' : 'auto')};
  overflow: hidden;
`;

interface Props {
  handleValueChange?: (value: any) => void;
  title: string;
  id?: string;
  corners?: boolean;
  border?: boolean;
  underline?: boolean;
}

interface State {
  isOpen: boolean;
  selectedOption?: boolean;
}

class DropdownCard extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleOptionChange = option => {
    this.setState(
      { selectedOption: option },
      () =>
        this.props.handleValueChange &&
        this.props.handleValueChange(option.value)
    );
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutsideDropdown = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { title, id, corners, border, underline, children } = this.props;

    return (
      <Wrapper
        onClick={this.handleClick}
        corners={true}
        id={id}
        {...this.props}
        isOpen={this.state.isOpen}
      >
        <TopWrapper corners={corners} border={border} underline={underline}>
          <span>{title}</span>
          {isOpen ? (
            <ArrowIcon name="keyboard_arrow_up" onClick={this.handleClick} />
          ) : (
            <ArrowIcon name="keyboard_arrow_down" onClick={this.handleClick} />
          )}
        </TopWrapper>

        <DetailCardWrapper isOpen={this.state.isOpen}>
          {children}
        </DetailCardWrapper>
      </Wrapper>
    );
  }
}

(DropdownCard as any).propTypes = {
  /** Title of select box */
  title: PropTypes.string.isRequired,
  /** Callback to retrieve value of option selected */
  handleValueChange: PropTypes.func,
  /** If true dropdown takes full width of parent */
  children: PropTypes.node
};

(DropdownCard as any).defaultProps = {
  title: 'Contact 1',
  handleValueChange: value => console.log(value)
};

export default DropdownCard;
