import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import { hexToRgbA } from '../../utils/index';
import Icon from '../atoms/Icon/Icon';
import { Title } from '../atoms/Typography/index';

const rotate = css`
  transform: rotate(180deg);
`;
const closed = css`
  max-height: 0;
`;

const primary = css`
  background: ${props => hexToRgbA(props.theme.colorPrimary, 0.1)};
`;

const danger = css`
  background: ${props => hexToRgbA(props.theme.colorDanger, 0.1)};
`;

const Wrapper = styled.div<{ primary?: string; danger?: string }>`
  padding: 0;
  ${props => props.primary && primary}
  ${props => props.danger && danger}
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${defaultColors.lightGrey};
  ::after {
    border-bottom: 1px solid ${defaultColors.lightGrey};
  }
  padding: 1rem;
`;

const ToggleIcon = styled(Icon)<{ isOpen?: boolean }>`
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${props => props.isOpen && rotate};
  cursor: pointer;
  overflow: hidden;
`;

const Content = styled.div<{ isOpen?: boolean }>`
  border-bottom: 1px solid ${defaultColors.lightGrey};
  ::after {
    border-bottom: 1px solid ${defaultColors.lightGrey};
  }

  height: auto;
  max-height: 600px;
  overflow: hidden;
  transition: max-height 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${props => !props.isOpen && closed};
`;

const IconWrapper = styled.div`
  width: 24px;
`;

const StyledTitle = styled(Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface Props {
  title?: string;
  icon?: string;
}

interface State {
  isOpen: boolean;
}

class ExpansionPanel extends PureComponent<Props, State> {
  state = {
    isOpen: false
  };

  toggleOpen = () =>
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { title, icon, children } = this.props;
    const { isOpen } = this.state;

    return (
      <Wrapper {...this.props}>
        <Header onClick={this.toggleOpen}>
          <StyledTitle bold>{title}</StyledTitle>
          {icon && (
            <IconWrapper>
              <ToggleIcon isOpen={isOpen} name={icon} />
            </IconWrapper>
          )}
        </Header>
        <Content isOpen={isOpen}>{children}</Content>
      </Wrapper>
    );
  }
}

(ExpansionPanel as any).propTypes = {
  title: PropTypes.string,
  /** Icon name per material design icons */
  icon: PropTypes.string,
  primary: PropTypes.bool,
  danger: PropTypes.bool
};

(ExpansionPanel as any).defaultProps = {
  title: 'Expansion Panel 1',
  icon: 'keyboard_arrow_down',
  primary: false,
  danger: false
};

export default ExpansionPanel;
