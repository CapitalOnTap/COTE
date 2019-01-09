import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/Button/Button';
import { Label } from '../atoms/Typography/index';
import { Option } from '../types';

import { colors as defaultColors } from '../../styles/defaults';

const StyledButton = styled(Button)<{
  buttonWidth: number;
  solid?: boolean;
  primary?: boolean;
  wrap?: boolean;
}>`
  width: ${props => `${props.buttonWidth}%`};
  background-color: ${props => {
    if (props.solid && props.theme && props.primary)
      return props.theme.colorPrimary;

    if (props.solid) return defaultColors.black;

    return 'transparent';
  }};
  &:hover {
    background-color: ${props => {
      if (props.solid && props.theme && props.primary)
        return props.theme.colorPrimary;

      if (props.solid) return defaultColors.black;

      return 'transparent';
    }};
  }

  @media (max-width: 640px) {
    width: ${props => (props.wrap ? '50%' : null)};
  }
`;

const ButtonGroupWrapper = styled.div<{
  wrap?: boolean;
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
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
  }
  button {
    border-radius: 0px;
    padding: 0.68em 1em;
  }
  & button:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 0;
    border-left: none;
  }

  @media (max-width: 640px) {
    & button:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: ${props => (props.wrap ? 0 : '4px')};
    }

    & button:nth-child(2) {
      ${props =>
        props.wrap
          ? `border-top-left-radius: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-right: ${
        props.solid || props.disabled
          ? 'none'
          : `1px solid ${defaultColors.black}`
      };`
          : null};
    }

    & button:nth-child(3) {
      ${props =>
        props.wrap
          ? `border-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 4px;`
          : null};
    }

    & button:nth-child(4) {
      border-top: 0;
      border-left: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 4px;
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
  wrap?: boolean;
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
      wrap
    } = this.props;
    const { selectedIndex } = this.state;

    return (
      <Wrapper id={id}>
        {label && <Label required={error} text={label} />}
        <ButtonGroupWrapper wrap={wrap}>
          {options.map((option, i) => (
            // TODO: fix index as key
            <StyledButton
              key={i}
              primary={primary}
              buttonWidth={100 / options.length}
              solid={selectedIndex === i}
              onClick={e => {
                e.preventDefault();
                this.setState({ selectedIndex: i });
                handleOptionSelected(options[i].value);
              }}
              wrap={wrap}
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
  wrap: PropTypes.bool
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
  wrap: false
};

export default ButtonGroup;
