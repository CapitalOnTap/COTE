import styled from 'styled-components';

const ScrollableContainer = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: #a4aab3;
  }
`;

export default ScrollableContainer;
