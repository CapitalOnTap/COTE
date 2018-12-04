import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/defaults';
import Icon from '../atoms/Icon/Icon';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import { PaperWrapper } from '../Paper/Paper';

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

const ListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${props => (props.selected ? colors.primary : colors.darkGrey)};
  padding: 1rem;
  background-color: ${props => (props.selected ? colors.lightGrey : null)};
  border-left: ${props =>
    props.selected ? `4px solid ${colors.primary}` : null};
  a {
    text-decoration: none;
    color: inherit;
  }
  i {
    color: inherit;
  }
`;

const Logo = styled.img`
  width: 64px;

  margin-bottom: 4rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span ~ i {
    padding-right: 1rem;
  }
`;

const Nav = styled(PaperWrapper.withComponent('nav'))`
  position: fixed;
  z-index: 10;
  width: ${props => `${props.width}px`};
  padding: 0;
  transition-duration: 235ms;
  position: fixed;
  top: 0;
  bottom: 0;
  background: #fff;
  border-radius: 0;
  ${props => {
    if (props.isOpen) {
      return `transform: translateX(0)`;
    }
    return `transform: translateX(-1000%)`;
  }};
`;

const Overlay = styled.div`
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

const CloseIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  left: ${props => `${props.navWidth + 64}px`};
  top: -110px;
  z-index: 10;
  visibility: ${props => (props.isNavOpen ? 'visible' : 'hidden')};
`;

class SideNav extends Component {
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
      openingDirection,
      logoUrl,
      sideNavRef,
      className,
      navItems,
      isOpen,
      iconsOnly,
      renderLink
    } = this.props;

    return (
      <Wrapper>
        <CloseIcon
          name="close"
          navWidth={width}
          isNavOpen={this.state.isOpen}
        />
        <OutsideAlerter handleClickOutsideElement={this.handleClickOutside}>
          <Nav
            width={width}
            // use props to control if isOpen is different from undefined
            isOpen={isOpen !== undefined ? isOpen : this.state.isOpen}
            className={className}
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
                {navItems.map((item, i) => (
                  <ListItem key={`snav-${i}`} selected={item.isSelected}>
                    {renderLink ? (
                      renderLink(
                        <Fragment>
                          {item.icon && <Icon name={item.icon} />}
                          {!iconsOnly && <span>{item.title}</span>}
                        </Fragment>,
                        item.pathname
                      )
                    ) : (
                      <Link href={item.pathname} target={item.target ? item.target : "_self"}>
                        {item.icon && <Icon name={item.icon} />}
                        {!iconsOnly && <span>{item.title}</span>}
                      </Link>
                    )}
                  </ListItem>
                ))}
              </List>
            </Content>
          </Nav>
        </OutsideAlerter>
        <Overlay isNavOpen={this.state.isOpen} />
      </Wrapper>
    );
  }
}

SideNav.propTypes = {
  openingDirection: PropTypes.oneOf(['left-right', 'right-left']),
  width: PropTypes.number,
  logoUrl: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      isSelected: PropTypes.bool
    })
  ),
  iconsOnly: PropTypes.bool,
  /**
   * if is passed, children and pathname are injected as parameters
   * allows you to render SideNav links differently, for example using a custom Router
   * example: <Sidenav renderLink={(children, pathname) => <MyCustomLinkComponent route={pathname}>{children}</MyCustomLinkComponent>}
   */
  renderLink: PropTypes.func
};

SideNav.defaultProps = {
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

  renderLink: undefined
};

export default SideNav;
