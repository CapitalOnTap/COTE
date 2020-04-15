import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
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

const ArrowWrapper = styled.div<{ small?: boolean; popupDirection?: string }>`
  display: ${props => (props.popupDirection ? 'flex' : 'inline-block')};
  position: relative;
  top: ${props => (props.popupDirection ? 'auto' : props.small ? '6px' : '2px')};
`;

const DropdownWrapper = styled.div`
  display: initial;
  position: relative;
`;

const DropdownButton = styled.div<{ popupDirection?: string }>`
  display: ${props =>
    props.popupDirection && props.popupDirection == 'down' ? 'flex' : 'inline-block'};
  position: relative;
  background-color: inherit;
  font-family: inherit;
  ${props => props.popupDirection && `cursor: pointer; align-items: center;`}
`;

const FirstName = styled.p<{ reverse?: boolean }>`
  position: relative;
  margin: 0 9px 0 10px;
  top: 50%;
  transform: translateY(-25%);
  display: inline-block;
  ${props => {
    if (props.reverse) {
      return 'color: #fff;';
    }
    return null;
  }}
`;

const BadgeWrapper = styled.div`
  display: inline-block;
`;

const MenuWrapper = styled.div<{
  right?: boolean;
  isOpen?: boolean;
  popupDirection?: string;
}>`
  right: ${props => (props.popupDirection || props.right ? 0 : null)};
  display: ${props => (props.isOpen ? 'block' : 'none')};
  margin-top: ${props => (props.popupDirection ? '20px' : '5px')};
  position: absolute;
  background-color: white;
  min-width: 178px;
  z-index: 2;
  border: solid 1px #e4e4e4;
  border-radius: 5px;
  ${props => {
    if (props.popupDirection && props.popupDirection == 'right') {
      return `top: -16rem;
        left: 130px;
         @media (max-width: 640px) {
           top: -16.5rem;
           left: 132px;
         }
       &:after, &:before {
         right: 100%;
         bottom: 8%;
         border: solid transparent;
         content: ' ';
         height: 0;
         width: 0;
         position: absolute;
         pointer-events: none;
       }
       &:before {
         border-right-color: #ffffff;
         border-width: 16px;
         margin-top: -16px;
       }`;
    }
    if (props.popupDirection && props.popupDirection == 'down') {
      return `
       &:after, &:before {
        bottom: 100%;
	      left: 70%;
        border: solid transparent;
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
       }
       &:after {
        border-bottom-color: #ffffff;
        border-width: 14px;
        margin-left: -14px;
      }
       &:before {
        border-bottom-color: #ffffff;
        border-width: 16px;
	      margin-left: -16px;
       }`;
    }
    return null;
  }}
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
  customerReferenceLabel: React.ReactNode;
  detailLabel: React.ReactNode;
  logOutLabel: React.ReactNode;
  showDetailLink: boolean;
  popupDirection?: string;
  renderLogo?: () => React.ReactNode;
  arrow?: boolean;
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
      customerReferenceLabel,
      detailLabel,
      logOutLabel,
      showDetailLink,
      popupDirection,
      renderLogo,
      arrow
    } = this.props;

    const initial = firstName[0] + lastName[0];
    const badgeSize = small ? 32 : 48;

    return (
      <OutsideAlerter handleClickOutsideElement={this.handleClickOutside}>
        <DropdownWrapper {...this.props}>
          <DropdownButton onClick={this.handleClick} popupDirection={popupDirection}>
            <BadgeWrapper>
              {renderLogo ? (
                renderLogo()
              ) : (
                <Badge content={initial || ''} size={badgeSize} reverse={reverse} />
              )}
            </BadgeWrapper>
            {!small && <FirstName reverse={reverse}>{firstName.split(' ')[0]}</FirstName>}
            {arrow && (
              <ArrowWrapper small={small} popupDirection={popupDirection}>
                <ArrowIcon reverse={reverse} name="keyboard_arrow_down" />
              </ArrowWrapper>
            )}
          </DropdownButton>
          <MenuWrapper isOpen={this.state.opened} right={small} popupDirection={popupDirection}>
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
            <MenuBox last={!showDetailLink}>
              <MenuEntry>{customerReferenceLabel}</MenuEntry>
              <MenuEntry>
                <b>{locatorId}</b>
              </MenuEntry>
            </MenuBox>
            {showDetailLink && (
              <MenuBox last>
                <MenuEntry>
                  <Link href={detailUrl}>{detailLabel}</Link>
                </MenuEntry>
              </MenuBox>
            )}
            <Separator />
            <MenuBox last hover>
              <MenuEntry onClick={logOutClick}>{logOutLabel}</MenuEntry>
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
  small: PropTypes.bool,
  customerReferenceLabel: PropTypes.string.isRequired,
  detailLabel: PropTypes.string.isRequired,
  logOutLabel: PropTypes.string.isRequired,
  showDetailLink: PropTypes.bool,
  popupDirection: PropTypes.string,
  renderLogo: PropTypes.func,
  arrow: PropTypes.bool
};

(MenuDropdown as any).defaultProps = {
  detailUrl: 'http://google.com',
  logOutClick: () => {
    console.log('Logout!');
  },
  small: false,
  firstName: '',
  lastName: '',
  customerReferenceLabel: 'Customer Reference: ',
  detailLabel: 'View your details',
  logOutLabel: 'Log Out',
  showDetailLink: true,
  arrow: true
};

export default MenuDropdown;
