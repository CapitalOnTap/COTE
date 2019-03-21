import * as React from "react";
import styled, { css } from "styled-components";
import Paper from "../Paper/Paper";
import Button from "../atoms/Button/Button";
import Icon from "../atoms/Icon/Icon";
import { SnackbarStatus } from "./types";

const active = css`
  transform: translate(-50%, -20%);
  pointer-events: auto;
`;

const notActive = css`
  transform: translate(-50%, 150%);
`;

const info = css`
  color: ${props => props.theme.colorDarkGrey};
`;

const failure = css`
  color: ${props => props.theme.colorDanger};
`;

const success = css`
  color: ${props => props.theme.colorSuccess};
`;

interface IWrapperProps extends React.HTMLAttributes<{}> {
  isActive?: boolean;
}

const Wrapper = styled(Paper)<IWrapperProps>`
  margin-top: 2rem;
  border-radius: 2px;
  background-color: #061f33;
  min-width: 288px;
  max-width: 568px;
  color: #fff;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  z-index: 9999999999;
  position: fixed;
  bottom: 0;
  left: 50%;
  transition: transform 0.25s cubic-bezier(0.4, 0, 1, 1) 0ms;
  pointer-events: auto;
  white-space: pre-line;
  ${props => (props.isActive ? active : notActive)};
`;

const Flex = styled.div<{ justify?: string }>`
  display: flex;
  ${props => (props.justify ? `flex-justify: ${props.justify}` : "")}
`;

const ActionButton = styled(Button)`
  justify-self: flex-end;
  border: none;
  padding: 0;
  height: auto;
  color: ${props => props.theme.colorPrimary};
`;

const StyledIcon = styled(Icon)<{ status?: SnackbarStatus }>`
  ${props => props.status === SnackbarStatus.Info && info};
  ${props => props.status === SnackbarStatus.Failure && failure};
  ${props => props.status === SnackbarStatus.Success && success};
`;

const IconContainer = styled.div`
  padding-right: 8px;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 8px;
`;

const SnackTitle = styled.div`
  box-sizing: border-box;
  margin-bottom: 8px;
`;

const Message = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const Action = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export interface SnackbarProps {
  delay: number;
  clearSnack: () => void;
  message: any;
  action?: () => void;
  actionText: string;
  title: any;
  icon: string;
  status: SnackbarStatus;
}

export default class Snackbar extends React.Component<SnackbarProps, any> {
  static defaultProps: SnackbarProps = {
    delay: 4000,
    clearSnack: () => {},
    actionText: "DISMISS",
    message: "",
    title: "",
    icon: "",
    status: SnackbarStatus.Info
  };

  private timer;

  state = {
    visible: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), 0);
    this.setTimer();
  }

  componentWillReceiveProps(nextProps) {
    // reset the timer if children are changed
    if (nextProps.children !== this.props.children) {
      this.setTimer();
      this.setState({ visible: true });
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  setTimer = () => {
    // clear any existing timer
    this.timer != null ? this.clearTimer() : null;

    // hide after `delay` milliseconds
    this.timer = setTimeout(() => {
      this.setState({ visible: false });
      this.timer = null;
      // TODO - work on improving push of next snack
      this.props.clearSnack();
    }, this.props.delay);
  };

  clearTimer = () => {
    clearTimeout(this.timer);
  };

  public render() {
    const { action, message, actionText, title, icon, status } = this.props;
    return (
      <Wrapper
        isActive={this.state.visible}
        onMouseEnter={this.clearTimer}
        onMouseLeave={this.setTimer}
      >
        <Flex>
          {icon && (
            <IconContainer>
              <StyledIcon name={icon} status={status} />
            </IconContainer>
          )}
          <ContentContainer>
            <SnackTitle>
              <b>{title}</b>
            </SnackTitle>
            <Message>
              <p>{message}</p>
            </Message>
          </ContentContainer>
        </Flex>

        {action && (
          <Action>
            <Flex justify="flex-end">
              <ActionButton onClick={action}>{actionText}</ActionButton>
            </Flex>
          </Action>
        )}
      </Wrapper>
    );
  }
}
