import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Button from '../atoms/Button/Button';
import Icon from '../atoms/Icon/Icon';
import { Title } from '../atoms/Typography/Heading';
import Paper from '../Paper/Paper';

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const StyledIcon = styled(Icon)`
  margin-right: 1em;
`;

const StyledTitle = styled(Title)<{ error?: boolean }>`
  color: ${props => (props.error ? defaultColors.danger : defaultColors.primary)};
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Message = styled.div`
  margin-bottom: 1em;
`;

interface Props {
  icon: string;
  title: string;
  buttonText: string;
  error?: boolean;
  message: boolean;
  onButtonClick?: () => void;
}

const Toast: React.SFC<Props> = ({
  icon,
  title,
  buttonText,
  error,
  message,
  onButtonClick
}) => {
  return (
    <Paper>
      <Header>
        <StyledIcon name={icon} error={error} primary={!error} />{' '}
        <StyledTitle error={error}>
          <b>{title}</b>
        </StyledTitle>
      </Header>
      <Message>{message}</Message>
      <Actions>
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </Actions>
    </Paper>
  );
};

(Toast as any).propTypes = {
  icon: PropTypes.string,
  buttonText: PropTypes.string,
  error: PropTypes.bool,
  onButtonClick: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string
};

(Toast as any).defaultProps = {
  icon: 'check_circle',
  buttonText: 'Dismiss',
  error: false,
  title: 'Toast title',
  message: 'Toast message',
  onButtonClick: () => alert('Button clicked')
};

export default Toast;
