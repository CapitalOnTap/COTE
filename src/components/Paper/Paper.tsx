import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import elevationMixin from '../../mixins/elevation';

interface PaperWrapperProps {
  padding?: string;
  elevation?: number;
}

export const PaperWrapper = styled.div<PaperWrapperProps>`
  border-radius: 4px;
  background-color: #ffffff;
  overflow: hidden;
 
  ${props => props.elevation && elevationMixin(props.elevation)}
  padding: ${props => (props.padding ? props.padding : '1rem')};
`;

interface Props extends PaperWrapperProps {}

const Paper: React.SFC<Props> = props => {
  const { children } = props;
  return <PaperWrapper {...props}>{children}</PaperWrapper>;
};

Paper.propTypes = {
  elevation: PropTypes.number
};

Paper.defaultProps = {
  elevation: 8
};

export default Paper;
