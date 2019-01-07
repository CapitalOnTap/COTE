import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import elevationMixin from '../../mixins/elevation';

export const PaperWrapper = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
 
  ${props => props.elevation && elevationMixin(props.elevation)}
  padding: ${props => (props.padding ? props.padding : '1rem')};
`;

const Paper = props => {
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
