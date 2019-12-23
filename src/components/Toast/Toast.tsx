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

const StyledTitleColor = props => {
  if (props.error) {
    return defaultColors.danger;
  } else if (props.warning) {
    return defaultColors.secondary;
  }
  return defaultColors.primary;
};

const StyledTitle = styled(Title)<{ warning?: boolean; error?: boolean }>`
  color: ${props => StyledTitleColor(props)};
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
  warning?: boolean;
  error?: boolean;
  message: boolean;
  onButtonClick?: () => void;
}

const Toast: React.SFC<Props> = ({
  icon,
  title,
  buttonText,
  warning,
  error,
  message,
  onButtonClick
}) => {
  return (
    <Paper>
      <Header>
        <StyledIcon name={icon} warning={warning} error={error} primary={!error} />{' '}
        <StyledTitle error={error} warning={warning}>
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
  warning: PropTypes.bool,
  error: PropTypes.bool,
  onButtonClick: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string
};

(Toast as any).defaultProps = {
  icon: 'check_circle',
  buttonText: 'Dismiss',
  warning: false,
  error: false,
  title: 'Toast title',
  message: 'Toast message',
  onButtonClick: () => alert('Button clicked')
};

export default Toast;
