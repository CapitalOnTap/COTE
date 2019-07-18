import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Icon from '../atoms/Icon/Icon';
import { Caption, Label } from '../atoms/Typography/index';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import ResultsList from '../ResultsList/ResultsList';
import { Option } from '../types';

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

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  min-width: 66px;
  width: ${props => (props.full ? '100%' : '232px')};
  border: ${props => {
    if (props.error && props.theme) return `1px solid ${props.theme.colorDanger}`;
    if (props.error) return `1px solid ${defaultColors.danger}`;

    return `1px solid ${defaultColors.default}`;
  }};
  border-radius: 4px;
  padding: 9px 16px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  user-select: none;
  outline: none;
  &[disabled] {
    background-color: ${defaultColors.disabledBackgroundColor};
    color: ${defaultColors.disabledColor};
  }
`;

const Title = styled.span``;

const Clickable = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
`;

interface Props extends WrapperProps {
  selectedOption?: Option;
  handleValueChange?: (value: any) => void;
  options: Option[];
  title?: any;
  label?: string;
  lastOption?: Option;
  searchable?: boolean;
  isControllable?: boolean;
}

interface State {
  isOpen: boolean;
  selectedOption?: Option;
}

class Dropdown extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: props.selectedOption
    };
  }

  handleOptionChange = (option: Option) => {
    this.setState(
      { selectedOption: option, isOpen: false },
      () => this.props.handleValueChange && this.props.handleValueChange(option.value)
    );
  };

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }

    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutsideDropdown = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const {
      options,
      title,
      error,
      full,
      label,
      lastOption,
      id,
      disabled,
      searchable,
      isControllable,
      ...props
    } = this.props;

    /* Check if this is controlled by the parent, if yes, use the one from the parent */
    const selectedOption = isControllable ? this.props.selectedOption : this.state.selectedOption;

    return (
      <OutsideAlerter handleClickOutsideElement={this.handleClickOutsideDropdown} {...props}>
        {label && <Label required={!!error} text={label} />}

        <Wrapper error={error} full={full} id={id} {...this.props} tabIndex={0}>
          <Clickable onClick={this.handleClick} />
          {selectedOption ? <Title>{selectedOption.title}</Title> : <Title>{title}</Title>}
          {!isOpen && !disabled && (
            <ArrowIcon name="keyboard_arrow_down" onClick={this.handleClick} />
          )}
          {isOpen && !disabled ? (
            <div>
              <ResultsList
                searchable={isOpen && searchable}
                handleResultSelected={this.handleOptionChange}
                results={options}
                lastItem={lastOption}
              />
              <ArrowIcon name="keyboard_arrow_up" onClick={this.handleClick} />
            </div>
          ) : null}
        </Wrapper>
        {error && <Caption required text={error} />}
      </OutsideAlerter>
    );
  }
}

(Dropdown as any).propTypes = {
  /** Title of select box */
  title: PropTypes.any.isRequired,
  /** Possible options and their values */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.any.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
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

(Dropdown as any).defaultProps = {
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

export default Dropdown;
