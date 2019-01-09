import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/defaults';
import { Title } from '../atoms/Typography/index';
import Tab from './Tab';

const TabsWrapper = styled.div`
  position: relative;
`;

const TabMarker = styled.div<{ width: number; position: number }>`
  height: 2px;
  width: ${props => props.width}%;
  z-index: 2;
  background: ${colors.primary};
  transition: all 250ms ease;
  transform: translateX(${props => `${props.position}%`});
  top: 30px;
`;

const TabTitle = styled(Title.withComponent('a'))<{ isActive?: boolean }>`
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

const TabsContainer = styled.div<{ margin?: string }>`
  margin: ${props => props.margin || '1.4rem'};
  display: flex;
  overflow: hidden;
`;

interface TabProps {
  title?: string;
}

interface Props {
  controlledActiveIndex?: number;
  onTabClicked?: (index: number) => void;
  contentMargin?: string;
  children: React.ReactElement<TabProps>[];
}

interface State {
  activeIndex: number;
}

class Tabs extends Component<Props, State> {
  static getDerivedStateFromProps(nextProps: Props, state: State) {
    const { controlledActiveIndex } = nextProps;
    if (
      typeof controlledActiveIndex == 'number' &&
      controlledActiveIndex !== state.activeIndex
    ) {
      return { activeIndex: controlledActiveIndex };
    } else {
      return null;
    }
  }

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
    const { children, contentMargin } = this.props;
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

    const childTabs = React.Children.map(children, child =>
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
          <TabsContainer margin={contentMargin}>{childTabs}</TabsContainer>
        </TabsWrapper>
      </div>
    );
  }
}

(Tabs as any).propTypes = {
  /** Initial active index to show on component mount */
  activeIndex: PropTypes.number,
  /** Optional index to control active tab from outside of the component */
  controlledActiveIndex: PropTypes.number,
  /** Handler to run when the tab is clicked */
  onTabClicked: PropTypes.func,
  /** Child nodes */
  children: PropTypes.arrayOf(PropTypes.node),
  /** Optional margin to apply to tabs container */
  contentMargin: PropTypes.string
};

(Tabs as any).defaultProps = {
  activeIndex: 0,
  onTabClicked: null,
  children: []
};

export default Tabs;
