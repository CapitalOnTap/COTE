import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button/Button';
import Label from '../atoms/Typography/Label';
import { Option } from '../types';

const StyledButton = styled(Button)<
  React.HTMLAttributes<{}> & { buttonWidth?: number; shouldWrap?: boolean }
>`
  width: ${props => `${props.buttonWidth}%`};
  @media (max-width: 640px) {
    width: ${props => (props.shouldWrap ? '50%' : null)};
  }
`;

const ButtonGroupWrapper = styled.div<{
  shouldWrap?: boolean;
  solid?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  & button:not(:first-child):not(:last-child) {
    border-left: none;
  }
  & button:first-child {
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px;
  }
  button {
    border-radius: 0px;
  }
  & button:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 0;
    border-left: none;
  }

  @media (max-width: 640px) {
    & button:first-child {
      border-top-left-radius: 2px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: ${props => (props.shouldWrap ? 0 : '2px')};
    }

    & button:nth-child(2) {
      ${props =>
        props.shouldWrap
          ? `border-top-left-radius: 0;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-right: ${
        props.solid || props.disabled
          ? 'none'
          : `1px solid ${props.theme.colorBlack}`
      };`
          : null};
    }

    & button:nth-child(3) {
      ${props =>
        props.shouldWrap
          ? `border-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 2px;
      border-left: ${
        props.solid || props.disabled
          ? 'none'
          : `1px solid ${props.theme.colorBlack} !important`
      };`
          : null};
    }

    & button:nth-child(4) {
      border-top: 0;
      border-left: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 0;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

interface Props {
  options: Option[];
  handleOptionSelected: (value: any) => void;
  label: string;
  error?: boolean;
  primary?: boolean;
  id: string;
  shouldWrap?: boolean;
}

interface State {
  selectedIndex: number;
}

class ButtonGroup extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  render() {
    const {
      options,
      handleOptionSelected,
      label,
      error,
      primary,
      id,
      shouldWrap
    } = this.props;
    const { selectedIndex } = this.state;

    return (
      <Wrapper id={id}>
        {label && <Label required={error} text={label} />}
        <ButtonGroupWrapper shouldWrap={shouldWrap}>
          {options.map((option, i) => (
            // TODO: fix index as key
            <StyledButton
              small
              outline
              key={i}
              primary={primary}
              buttonWidth={100 / options.length}
              solid={selectedIndex === i}
              onClick={e => {
                e.preventDefault();
                this.setState({ selectedIndex: i });
                handleOptionSelected(options[i].value);
              }}
              shouldWrap={shouldWrap}
            >
              {option.title}
            </StyledButton>
          ))}
        </ButtonGroupWrapper>
      </Wrapper>
    );
  }
}

(ButtonGroup as any).propTypes = {
  /** Use primary theme color */
  primary: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.any
    })
  ),
  handleOptionSelected: PropTypes.func,
  selectedIndex: PropTypes.number,
  shouldWrap: PropTypes.bool
};

(ButtonGroup as any).defaultProps = {
  label: '',
  options: [
    { title: 'LLP', value: 'LLP' },
    { title: 'Limited', value: 'Limited' },
    { title: 'Partnership', value: 'partnership' },
    { title: 'Sole Trader', value: 'Sole Trader' }
  ],
  handleOptionSelected: i => console.log(i),
  selectedIndex: 0,
  shouldWrap: false
};

export default ButtonGroup;
