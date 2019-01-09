import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../atoms/Icon/Icon';
import { Title } from '../atoms/Typography/index';

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const ArrowLeft = styled(Icon)<React.HTMLProps<{}>>`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const ArrowRight = styled(Icon)<React.HTMLProps<{}>>`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledTitle = styled(Title)<{ primary?: boolean }>`
  font-weight: bold;
  margin-bottom: 8px;
  color: ${props =>
    props.theme && props.primary ? props.theme.colorPrimary : '#27b161'};
  transition: opacity 1s ease-in;
`;

const Circle = styled.div<{ selected?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props =>
    props.theme && props.selected ? props.theme.colorPrimary : null};
  border: 1px solid
    ${props => (props.theme ? props.theme.colorPrimary : '#27b161')};
  margin-right: 16px;
`;

const RelativeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  & i {
    color: #061f33;
    cursor: pointer;
  }

  & ${Circle}:last-of-type {
    margin-right: 0;
  }
`;

interface Props {
  items: string[];
}

interface State {
  currentOption: number;
}

class HighlightsBarSlider extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentOption: 0
    };
  }

  handlePrevious = () => {
    this.setState({ currentOption: this.state.currentOption - 1 });
  };

  handleNext = () => {
    this.setState({ currentOption: this.state.currentOption + 1 });
  };

  render() {
    const { items } = this.props;

    return (
      <Wrapper {...this.props}>
        <StyledTitle primary>{items[this.state.currentOption]}</StyledTitle>

        <RelativeContainer>
          {items.map((op, i) => {
            return <Circle key={i} selected={i === this.state.currentOption} />;
          })}

          {this.state.currentOption > 0 && (
            <ArrowLeft
              name="keyboard_arrow_left"
              onClick={this.handlePrevious}
            />
          )}

          {this.state.currentOption + 1 < items.length && (
            <ArrowRight name="keyboard_arrow_right" onClick={this.handleNext} />
          )}
        </RelativeContainer>
      </Wrapper>
    );
  }
}

(HighlightsBarSlider as any).propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
};

(HighlightsBarSlider as any).defaultProps = {
  items: ['Some title 1', 'Some title 2', 'Some title 3']
};

export default HighlightsBarSlider;
