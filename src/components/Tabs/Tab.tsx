import React from 'react';
import styled from 'styled-components';

const TabWrapper = styled.div<{ position: number }>`
  width: 100%;
  flex: 0 0 auto;
  transition: all 250ms ease;
  transform: translateX(${props => `-${props.position}%`});
`;

interface Props {
  position: number;
}

const Tab: React.SFC<Props> = ({ children, ...props }) => {
  return <TabWrapper {...props}>{children}</TabWrapper>;
};

Tab.propTypes = {};

Tab.defaultProps = {};

export default Tab;
