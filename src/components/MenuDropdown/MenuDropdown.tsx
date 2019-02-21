import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import Badge from '../atoms/Badge/Badge';
import Icon from '../atoms/Icon/Icon';

const ArrowIcon = styled(Icon)`
  z-index: 2;
  color: ${props => {
    if (props.reverse) return '#fff';
    return props.theme ? props.theme.colorPrimary : defaultColors.primary;
  }};
  cursor: pointer;
`;

const ArrowWrapper = styled.div<{ small?: boolean }>`
  display: inline-block;
  position: relative;
  top: ${props => props.small ? '6px' : '2px'} ;
`;

const DropdownWrapper = styled.div`
  display: initial;
  position: relative;
`;

const DropdownButton = styled.div`
  display: inline-block;
  position: relative;
  background-color: inherit;
  font-family: inherit;
`;

const FirstName = styled.p`
  position: relative;
  margin: 0 9px 0 10px;
  top: 50%;
  transform: translateY(-25%);
  display: inline-block;
`;

const BadgeWrapper = styled.div`
  display: inline-block;
`;

const MenuWrapper = styled.div<{ right?: boolean; isOpen?: boolean }>`
  right: ${props => (props.right ? 0 : null)};
  display: ${props => (props.isOpen ? 'block' : 'none')};
  margin-top: 5px;
  position: absolute;
  background-color: white;
  min-width: 178px;
  z-index: 2;
  border: solid 1px #e4e4e4;
  border-radius: 5px;
`;

const MenuBox = styled.div<{ last?: boolean; hover?: boolean }>`
  padding: 16px 16px ${props => (props.last ? '16px' : '0')} 16px;
  display: block;
  cursor: ${props => (props.hover ? 'pointer' : 'auto')};
  &:hover {
    background: ${props => (props.hover ? props.theme.colorPrimary : 'white')};
    color: ${props => (props.hover ? 'white' : 'inherit')};
  }
`;

const MenuEntry = styled.p`
  margin-bottom: 8px;
  :last-child {
    margin-bottom: 0;
  }
`;

const Link = styled.a<{ reverse?: boolean }>`
  color: ${props => (props.reverse ? '#fff' : props.theme.colorPrimary)};
`;

const Separator = styled.hr`
  margin: 0;
`;

interface Props {
  firstName: string;
  lastName: string;
  legalName: string;
  locatorId: string;
  detailUrl: string;
  logOutClick: () => void;
  reverse?: boolean;
  small?: boolean;
  theme?: any;
}

interface State {
  opened: boolean;
}

class MenuDropdown extends Component<Props, State> {
  state = {
    opened: false
  };

  handleClick = () => {
    var opened = this.state.opened;
    this.setState({
      opened: !opened
    });
  };

  handleClickOutside = () => {
    this.setState({ opened: false });
  };

  render() {
    const {
      firstName,
      lastName,
      legalName,
      locatorId,
      detailUrl,
      logOutClick,
      reverse,
      small,
      theme
    } = this.props;

    const initial = firstName[0] + lastName[0];
    const badgeSize = small ? 32 : 48;

    return (
      <OutsideAlerter handleClickOutsideElement={this.handleClickOutside}>
        <DropdownWrapper {...this.props}>
          <DropdownButton onClick={this.handleClick}>
            <BadgeWrapper>
              <Badge
                content={initial || ''}
                size={badgeSize}
                background={reverse ? '#fff' : theme.colorPrimary}
                color={reverse ? theme.colorPrimary : '#fff'}
              />
            </BadgeWrapper>
            {!small && <FirstName>{firstName}</FirstName>}
            <ArrowWrapper small={small}>
              <ArrowIcon reverse={reverse} name="keyboard_arrow_down" />
            </ArrowWrapper>
          </DropdownButton>
          <MenuWrapper isOpen={this.state.opened} right={small}>
            <MenuBox>
              <MenuEntry>
                <b>
                  {firstName} {lastName}
                </b>
              </MenuEntry>
              <MenuEntry>
                <b>{legalName}</b>
              </MenuEntry>
            </MenuBox>
            <MenuBox>
              <MenuEntry>Customer Reference: </MenuEntry>
              <MenuEntry>
                <b>{locatorId}</b>
              </MenuEntry>
            </MenuBox>
            <MenuBox last>
              <MenuEntry>
                <Link href={detailUrl}>View your details</Link>
              </MenuEntry>
            </MenuBox>
            <Separator />
            <MenuBox last hover>
              <MenuEntry onClick={logOutClick}>Log Out</MenuEntry>
            </MenuBox>
          </MenuWrapper>
        </DropdownWrapper>
      </OutsideAlerter>
    );
  }
}

(MenuDropdown as any).propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  legalName: PropTypes.string.isRequired,
  locatorId: PropTypes.string.isRequired,
  detailUrl: PropTypes.string,
  logOutClick: PropTypes.func,
  small: PropTypes.bool
};

(MenuDropdown as any).defaultProps = {
  detailUrl: 'http://google.com',
  logOutClick: () => {
    console.log('Logout!');
  },
  small: false,
  firstName: '',
  lastName: ''
};

export default withTheme(MenuDropdown);
