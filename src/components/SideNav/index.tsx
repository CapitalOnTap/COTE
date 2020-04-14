import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import Icon from '../atoms/Icon/Icon';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import { PaperWrapper } from '../Paper/Paper';
import MenuDropdown from '../MenuDropdown/MenuDropdown';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const List = styled.ul`
  width: 100%;
`;

const ListItem = styled.li<{ selected?: boolean }>`
  display: flex;
  align-items: left;
  padding: 1rem;
  border-left: ${props => {
    if (!props.selected) {
      return null;
    }
    return props.theme
      ? `4px solid ${props.theme.colorSecondary}`
      : `4px solid ${defaultColors.secondary}`;
  }};
  a {
    text-decoration: none;
    color: inherit;
    height: 100%;
    width: 100%;
    color: ${props => {
      if (!props.selected) {
        return 'white';
      }
      return props.theme ? props.theme.colorSecondary : defaultColors.secondary;
    }}
    :visited {
      color: ${props => {
        if (!props.selected) {
          return 'white';
        }
        return props.theme ? props.theme.colorSecondary : defaultColors.secondary;
      }}
    }
    :hover {
      color: ${props => (props.theme ? props.theme.colorSecondary : defaultColors.secondary)};
    }
  }
  i {
    color: inherit;
    margin-right: 4px;
  }
`;

const Logo = styled.img`
  width: 64px;
  height: 64px;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  > span ~ i {
    padding-right: 1rem;
  }
`;

const Nav = styled(PaperWrapper.withComponent('nav'))<{
  width: number;
  isOpen?: boolean;
  userNav?: boolean;
}>`
  position: fixed;
  z-index: 10;
  width: ${props => `${props.width}px`};
  padding: 0;
  transition-duration: 235ms;
  position: fixed;
  top: 0;
  bottom: 0;
  background: ${props =>
    props.theme ? props.theme.colorNavigationBackground : defaultColors.navigationBackground};
  border-radius: 0;
  ${props => {
    if (props.isOpen) {
      return `transform: translateX(0)`;
    }
    return `transform: translateX(-1000%)`;
  }};
  ${props =>
    props.userNav &&
    `display: flex;
    justify-content: space-between;
    flex-direction: column;`};
`;

const Overlay = styled.div<{ isNavOpen?: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  opacity: ${props => (props.isNavOpen ? 1 : 0)};
  position: fixed;
  right: 0;
  top: 0;
  transform: translateZ(0);
  transition: opacity 0.2s linear;
  visibility: ${props => (props.isNavOpen ? 'visible' : 'hidden')};
  z-index: ${props => (props.isNavOpen ? 9 : 0)};
`;

const Wrapper = styled.div`
  position: relative;
`;

const CloseIcon = styled(Icon)<{ navWidth: number; isNavOpen?: boolean }>`
  cursor: pointer;
  position: absolute;
  left: ${props => `${props.navWidth + 64}px`};
  top: -110px;
  z-index: 10;
  visibility: ${props => (props.isNavOpen ? 'visible' : 'hidden')};
`;

const UserNavWrapper = styled.div`
  display: flex;
  padding: 3rem 1rem;
`;

interface Props {
  width?: number;
  logoUrl?: string;
  className?: string;
  navItems: {
    target?: string;
    rel?: string;
    pathname: string;
    isSelected?: boolean;
    icon?: string;
    title?: React.ReactNode;
    testKey?: string;
  }[];
  isOpen?: boolean;
  iconsOnly?: boolean;
  renderLink?: (children: React.ReactNode, path: string) => React.ReactNode;
  userNav?: boolean;
}

interface State {
  isOpen: boolean;
}

class SideNav extends Component<Props, State> {
  state = {
    isOpen: false
  };

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const {
      width,
      logoUrl,
      className,
      navItems,
      isOpen,
      iconsOnly,
      renderLink,
      userNav
    } = this.props;

    return (
      <Wrapper>
        <CloseIcon name="close" navWidth={width as number} isNavOpen={this.state.isOpen} />
        <OutsideAlerter handleClickOutsideElement={this.handleClickOutside}>
          <Nav
            width={width as number}
            // use props to control if isOpen is different from undefined
            isOpen={isOpen !== undefined ? isOpen : this.state.isOpen}
            className={className}
            userNav={userNav}
          >
            <Content>
              {logoUrl &&
                (renderLink ? (
                  renderLink(
                    <Fragment>
                      <Logo src={logoUrl} />
                    </Fragment>,
                    '/'
                  )
                ) : (
                  <a href="/">
                    <Logo src={logoUrl} />
                  </a>
                ))}
              <List>
                {navItems.map((item, i) => {
                  if (item.target === '_blank' && item.rel === undefined) {
                    // Set rel to prevent "reverse tabnabbing" in older browsers, can be overridden if needed
                    item.rel = 'noopener noreferrer';
                  }
                  return (
                    <ListItem
                      key={`snav-${item.pathname}`}
                      selected={item.isSelected}
                      data-testid={item.testKey ? `SideNav-${item.testKey}` : null}
                    >
                      {renderLink ? (
                        renderLink(
                          <Fragment>
                            {item.icon && <Icon name={item.icon} />}
                            {!iconsOnly && <span>{item.title}</span>}
                          </Fragment>,
                          item.pathname
                        )
                      ) : (
                        <Link
                          href={item.pathname}
                          target={item.target}
                          rel={item.rel}
                          data-testid={item.testKey ? `SideNav-${item.testKey}` : null}
                        >
                          {item.icon && <Icon name={item.icon} />}
                          {!iconsOnly && <span>{item.title}</span>}
                        </Link>
                      )}
                    </ListItem>
                  );
                })}
              </List>
            </Content>
            {userNav && (
              <UserNavWrapper>
                <MenuDropdown
                  firstName="George Michael"
                  lastName="Bluth"
                  legalName="Banana Stand"
                  showDetailLink={true}
                  customerReferenceLabel="Unique Identifier: "
                  detailLabel="Home"
                  detailUrl="https://www.capitalontap.com"
                  logOutLabel="Exit"
                  locatorId="AS12D34"
                  logOutClick={() => console.log('Logout!')}
                  reverse
                  popupDirection="right"
                  renderLogo={() => (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM4 13.98C5.29 15.92 7.5 17.2 10 17.2C12.5 17.2 14.71 15.92 16 13.98C15.97 11.99 11.99 10.9 10 10.9C8 10.9 4.03 11.99 4 13.98Z"
                        fill="white"
                      />
                    </svg>
                  )}
                />
              </UserNavWrapper>
            )}
          </Nav>
        </OutsideAlerter>
        <Overlay isNavOpen={this.state.isOpen} />
      </Wrapper>
    );
  }
}

(SideNav as any).propTypes = {
  openingDirection: PropTypes.oneOf(['left-right', 'right-left']),
  width: PropTypes.number,
  logoUrl: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pathname: PropTypes.string,
      isSelected: PropTypes.bool,
      icon: PropTypes.string,
      target: PropTypes.string,
      rel: PropTypes.string
    })
  ),
  iconsOnly: PropTypes.bool,
  /**
   * if is passed, children and pathname are injected as parameters
   * allows you to render SideNav links differently, for example using a custom Router
   * example: <Sidenav renderLink={(children, pathname) => <MyCustomLinkComponent route={pathname}>{children}</MyCustomLinkComponent>}
   */
  renderLink: PropTypes.func,
  userNav: PropTypes.bool
};

(SideNav as any).defaultProps = {
  width: 144,
  /** a logo with same size as http://via.placeholder.com/64x64 */
  logoUrl: '',
  navItems: [
    {
      title: 'Dashboard',
      pathname: '/dashboard',
      isSelected: true,
      icon: 'home'
    },
    {
      title: 'Activities',
      pathname: '/activities',
      isSelected: false,
      icon: 'credit_card'
    },
    {
      title: 'Cards',
      pathname: '/cards',
      isSelected: false,
      icon: 'person'
    },
    {
      title: 'Payment',
      pathname: '/payment',
      isSelected: false,
      icon: 'phone'
    },
    {
      title: 'Premium',
      pathname: '/premium',
      isSelected: false,
      icon: 'money'
    },
    {
      title: 'Support',
      pathname: 'https://support.capitalontap.com/en/support/home',
      isSelected: false,
      icon: 'help',
      target: '_blank'
    }
  ],
  iconsOnly: false,

  renderLink: undefined,
  userNav: false
};

export default SideNav;
