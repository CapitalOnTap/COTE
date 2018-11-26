import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../atoms/Typography';
import { colors as defaultColors } from '../../styles/defaults';

const Wrapper = styled.div`
  border: ${props =>
    props.theme
      ? `1px solid ${props.theme.colorPrimary}`
      : `1px solid ${defaultColors.primary}`};
  border-radius: 4px;
`;

const ContentWrapper = styled.div`
  padding: ${props => props.noPadding ? null : '24px'};
`;

const TitleWrapper = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #f3f3f3;
`;

const ContentBox = ({ children, title, className, id, noPadding, ...props }) => {
  return (
    <Wrapper className={className} {...props} id={id}>
      <TitleWrapper>
        <Title bold>{title}</Title>
      </TitleWrapper>
      <ContentWrapper noPadding={noPadding}>{children}</ContentWrapper>
    </Wrapper>
  );
};

ContentBox.propTypes = {
  title: PropTypes.string,
  /** What to render inside the content area of the box */
  children: PropTypes.node,
  noPadding: PropTypes.bool,
};

ContentBox.defaultProps = {
  title: 'Title',
  children: 'The content goes here'
};

export default ContentBox;
