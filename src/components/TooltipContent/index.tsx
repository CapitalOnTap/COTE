import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Caption } from '../atoms/Typography/index';

const Wrapper = styled.div`
  width: 272px;
`;

const Title = styled.p`
  font-size: 1em;
  margin-bottom: 1em;
`;

interface Props {
  title: string;
  description: string;
}

const TooltipContent: React.SFC<Props> = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Caption text={description} />
    </Wrapper>
  );
};

(TooltipContent as any).propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

TooltipContent.defaultProps = {
  title: 'Title of tooltip',
  description: 'A short description should go here.'
};

TooltipContent.displayName = 'Tooltip';

export default TooltipContent;
