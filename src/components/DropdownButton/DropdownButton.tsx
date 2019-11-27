import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Icon from '../atoms/Icon/Icon';
import { Caption } from '../atoms/Typography/index';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import {  DropdownButtonItem } from '../types';
import Button from "../atoms/Button/Button";
import Paper from "../Paper/Paper";

const RWrapper = styled(Paper)<React.HTMLAttributes<{}>>`
  position: absolute;
  top: 48px;
  min-height: auto;
  max-height: 17em;
  overflow: auto;
  min-width: 65px;
  left: 0;
  padding: 0;
  z-index: 999;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14);
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
}

const ResultWrapper = styled.div`
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background-color: ${props =>
      props.theme ? props.theme.colorPrimary : "rgba(39, 177, 97, 0.6)"};
  }
`;

const Result = styled.span`
  padding: 1em;
  font-weight: bold;
  display: inline-block;
  &:hover {
    color: #fff;
  }
`;

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
    padding-right: 5px;
    i{
        float: right;
        padding: 6px 0 0 6px;
    }

`;

// const Title = styled.span``;

// const Clickable = styled.span`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   z-index: 100;
//   top: 0;
//   left: 0;
// `;

interface Props extends WrapperProps {
  handleValueChange?: (value: any) => void;
  items: DropdownButtonItem[];
  text?: any;
  primary?: boolean;
  secondary?: boolean;
  solid?: boolean;
  danger?: boolean;
  outline?: boolean;
}

interface State {
  isOpen: boolean;
}

class DropdownButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
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

  renderButtonText = (title) =>{
      return <React.Fragment>
            {title}
          <ArrowIcon name="keyboard_arrow_down" onClick={this.handleClick} />
      </React.Fragment>
  }

  handleItemClick = (onClick) => {
    onClick();
    this.setState({isOpen: false});
  }

  render() {
    const { isOpen } = this.state;
    const {
      items,
      text,
      error,
      full,
      id,
      disabled,
      ...props
    } = this.props;

    /* Check if this is controlled by the parent, if yes, use the one from the parent */
    // const selectedOption = isControllable ? this.props.selectedOption : this.state.selectedOption;
    return (
      <OutsideAlerter handleClickOutsideElement={this.handleClickOutsideDropdown} {...props}>
        <Wrapper error={error} full={full} id={id} {...this.props} tabIndex={0}>
    <StyledButton {...props} onClick={this.handleClick} icon={!isOpen ? "keyboard_arrow_down" : "keyboard_arrow_up"}>
    {text}
    </StyledButton>
          {isOpen && !disabled ? (
              <RWrapper>
           {items.map((item, i) => {
            return (
              // TODO: Fix index as key
              <ResultWrapper key={`r-${i}`}>
                <Result onClick={() => this.handleItemClick(item.onClick)}>
                  {item.text}
                </Result>
              </ResultWrapper>
            );
          })}
          </RWrapper>
          ) : null}
        </Wrapper>
        {error && <Caption required text={error} />}
      </OutsideAlerter>
    );
  }
}

(DropdownButton as any).propTypes = {
  /** Title of select box */
  title: PropTypes.any.isRequired,
  /** Possible options and their values */
  items: PropTypes.arrayOf(
      PropTypes.shape({
          text: PropTypes.string.isRequired,
          onClick: PropTypes.func
      })
  ),
  /** Callback to retrieve value of option selected */
  handleValueChange: PropTypes.func,
  /** If true dropdown takes full width of parent */
  full: PropTypes.bool,
  /** Text label */
  label: PropTypes.string,
  /** An item added at the end of the results list - can be used for "can't find my option" scenarios */
  lastOption: PropTypes.shape({
    title: PropTypes.any.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  }),
  selectedOption: PropTypes.shape({
    title: PropTypes.any.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  }),
  disabled: PropTypes.bool,
  isControllable: PropTypes.bool
};

(DropdownButton as any).defaultProps = {
  title: 'Select an option',
  options: [{ title: 'Option 1', value: 1 }, { title: 'Option 2', value: 2 }],
  handleValueChange: value => console.log(value),
  full: false,
  label: '',
  lastOption: null,
  selectedOption: null,
  disabled: false,
  searchable: false,
  isControllable: false
};

export default DropdownButton;
