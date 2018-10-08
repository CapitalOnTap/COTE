import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/defaults';
import { Title } from '../atoms/Typography';

const TabsWrapper = styled.div`
  /* display: flex; */
  position: relative;
`;

const TabMarker = styled.div`
  height: 2px;
  width: ${props => props.width}%;
  /* position: absolute; */
  z-index: 2;
  background: ${colors.primary};
  transition: all 250ms ease;
  transform: translateX(${props => `${props.position}%`});
  top: 30px;
`;

const TabTitle = Title.withComponent('a').extend`
  cursor: pointer;
  color: ${props => (props.isActive ? colors.black : colors.darkGrey)};

  font-weight: 700;
  padding: 8px;
  display: inline-block;
  /* margin-bottom: 1rem; */
  width: 100%;
  text-align: center;
`;

const TabsHeaders = styled.div`
  display: flex;
  position: relative;
`;

const TabsContainer = styled.div`
  margin: 1.4rem;
  display: flex;
  overflow: hidden;
`;

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: props.activeIndex
    };
  }

  handleTabClicked = index => {
    if (this.props.onTabClicked) {
      this.props.onTabClicked(index);
    }
    
    this.setState({ activeIndex: index });
  };

  render() {
    const { children } = this.props;
    const { activeIndex } = this.state;

    const tabHeaders = React.Children.map(children, (child, index) => {
      return (
        <TabTitle
          isActive={activeIndex === index}
          onClick={() => this.handleTabClicked(index)}
        >
          {child.props.title}
        </TabTitle>
      );
    });

    const childTabs = React.Children.map(children, (child, index) =>
      React.cloneElement(child, { position: activeIndex * 100 })
    );

    return (
      <div>
        <TabsWrapper {...this.props}>
          <TabsHeaders>{tabHeaders}</TabsHeaders>
          <TabMarker
            width={100 / children.length}
            position={activeIndex * 100}
          />
          <TabsContainer>{childTabs}</TabsContainer>
        </TabsWrapper>
      </div>
    );
  }
}

Tabs.propTypes = {
  onTabClicked: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.node)
};

Tabs.defaultProps = {
  onTabClicked: null,
  children: []
};

export default Tabs;
