import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Paper from '../Paper/Paper';
import { Title } from '../atoms/Typography';

const Wrapper = styled(Paper)<React.HTMLAttributes<{}>>`
  padding: 0;
`;

const TitleWrapper = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #f3f3f3;
`;

const RenderTitleWrapper = styled.div`
  border-bottom: 1px solid #f3f3f3;
`;

interface Props {
  title?: string;
  renderTitle?: () => ReactNode;
  className?: string;
  id?: string;
}

const WidgetBox: React.SFC<Props> = ({
  children,
  title,
  className,
  id,
  renderTitle,
  ...props
}) => {
  return (
    <Wrapper className={className} {...props} id={id}>
      {renderTitle ? (
        <RenderTitleWrapper>{renderTitle()}</RenderTitleWrapper>
      ) : (
        <TitleWrapper>
          <Title primary bold>{title}</Title>
        </TitleWrapper>
      )}
      {children}
    </Wrapper>
  );
};

(WidgetBox as any).propTypes = {
  title: PropTypes.string,
  renderTitle: PropTypes.func
};

(WidgetBox as any).defaultProps = {
  title: 'Title',
  children: 'The content goes here'
};

export default WidgetBox;
