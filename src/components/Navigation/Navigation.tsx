import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { StyledLinkButton } from '../atoms/Button/Button';
import { colors as defaultColors } from '../../styles/defaults';
import { isColorDark } from '../../utils/index';

const NavButton = styled(StyledLinkButton)`
  ${props => {
    const backgroundColor = props.theme
      ? props.theme.colorNavigationBackground
      : defaultColors.navigationBackground;
    if (isColorDark(backgroundColor)) {
      return 'border: 1px solid white !important;';
    }
    return null;
  }}
  @media screen and (max-width: 640px) {
    height: 100%;
    padding: 6px 16px;
    line-height: normal;
  }
  @media screen and (max-width: 420px) {
    margin-left: 10px;
  }
`;

interface LogoProps {
  logoHeight?: string;
}

const Logo = styled.img<LogoProps>`
  height: ${props => (props.logoHeight ? props.logoHeight : '80%')};
  max-height: 55px;
  @media screen and (max-width: 640px) {
    padding: 10px 0px;
  }
  @media screen and (max-width: 350px) {
    width: 200px;
  }
`;

interface NavProps {
  maxWidth?: string;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: ${props =>
    props.theme ? props.theme.colorNavigationBackground : defaultColors.navigationBackground};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '928px')};
  margin: 0 auto;
  @media only screen and (max-width: 960px) {
    margin: 0 40px;
  }
  @media only screen and (max-width: 40em) {
    margin: 0 1em;
  }

  @media screen and (max-width: 640px) {
    height: 56px;
  }
`;
const NavLeft = styled.div``;

const NavRight = styled.div`
  button,
  a {
    margin-right: 1em;
  }

  & a:last-child,
  & button:last-child {
    margin-right: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: ${props =>
    props.theme ? props.theme.colorNavigationBackground : defaultColors.navigationBackground};
`;

interface Props extends LogoProps, NavProps {
  logo: string;
  logoHref?: string;
  items: { title?: string; url?: string; onClick?: () => void }[];
}

const Navigation: React.SFC<Props> = ({ logo, logoHref, items, logoHeight, maxWidth }) => {
  const renderedLogo = <Logo src={logo} alt="logo" logoHeight={logoHeight} />;

  return (
    <Container>
      <Nav maxWidth={maxWidth}>
        <NavLeft>{logoHref ? <a href={logoHref}>{renderedLogo}</a> : renderedLogo}</NavLeft>
        <NavRight>
          {items.map((item, i) => {
            return (
              <NavButton outline key={`n-${i}`} href={item.url} onClick={item.onClick} solid>
                {item.title}
              </NavButton>
            );
          })}
        </NavRight>
      </Nav>
    </Container>
  );
};

(Navigation as any).propTypes = {
  /** Url path to the logo/brand image */
  logo: PropTypes.string,
  /** Array with the navigation items */
  items: PropTypes.array,
  /** Max width that the nav can extend to */
  maxWidth: PropTypes.string
};

(Navigation as any).defaultProps = {
  logo: 'http://via.placeholder.com/222x40',
  items: [
    {
      url: 'http://google.com',
      title: 'Nav item 1'
    },
    {
      url: 'http://google.com',
      title: 'Nav item 2'
    }
  ]
};

export default Navigation;
