import React from 'react';
import styled from 'styled-components';
import Paper from '../Paper/Paper';
import { Heading2, Title } from '../atoms/Typography/index';
import Icon from '../atoms/Icon/Icon';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
`;

interface Props {
  title: string;
  subtitle: string;
  icon: string;
}

const MessageCard: React.SFC<Props> = props => {
  const { title, subtitle, icon } = props;

  return (
    <Paper {...props}>
      <Wrapper>
        <Heading2>{title}</Heading2>
      </Wrapper>
      <Wrapper>
        <Title>{subtitle}</Title>
      </Wrapper>
      <Wrapper>
        <Icon name={icon} primary />
      </Wrapper>
    </Paper>
  );
};

MessageCard.propTypes = {};

export default MessageCard;
