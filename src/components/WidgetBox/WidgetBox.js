import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Paper } from '../../index';
import { Title } from '../atoms/Typography';

const Wrapper = styled(Paper)`
  padding: 0;
`;

const TitleWrapper = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #f3f3f3;
`;

const WidgetBox = ({ children, title, className, id, ...props }) => {
  return (
    <Wrapper className={className} {...props} id={id}>
      <TitleWrapper>
        <Title bold>{title}</Title>
      </TitleWrapper>
      {children}
    </Wrapper>
  );
};

WidgetBox.propTypes = {
  title: PropTypes.string,
  /** What to render inside the content area of the box */
  children: PropTypes.node
};

WidgetBox.defaultProps = {
  title: 'Title',
  children: 'The content goes here'
};

export default WidgetBox;
