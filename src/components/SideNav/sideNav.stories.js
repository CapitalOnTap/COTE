import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import styled from 'styled-components';
import SideNav from './';
import MenuDropdown from '../MenuDropdown/MenuDropdown';

const Container = styled.div`
  min-height: 400px;
`;

const MyCustomLink = ({ children, url }) => <b url={url}>{children}</b>;

storiesOf('SideNav', module)
  .add('Open', () => (
    <Container>
      <SideNav isOpen logoUrl="http://via.placeholder.com/64x64" />
    </Container>
  ))
  .add('With custom Link', () => (
    <Container>
      <SideNav
        logoUrl="http://via.placeholder.com/64x64"
        isOpen
        renderLink={(children, pathname) => (
          /* anchor tags are be wrrapped with <b> tag */
          <MyCustomLink url={pathname}>{children}</MyCustomLink>
        )}
      />
    </Container>
  ))
  .add('Without logo', () => (
    <Container>
      <SideNav isOpen />
    </Container>
  ))
  .add('Icons only', () => (
    <Container>
      <SideNav isOpen iconsOnly width={72} />
    </Container>
  ))
  .add('With menu button', () => {
    class PageContainer extends Component {
      handleOpenSideNav = () => {
        this.sideNavRef.toggle();
      };

      render() {
        return (
          <Container>
            <div>
              <button type="button" onClick={this.handleOpenSideNav}>
                toggle Menu
              </button>
            </div>
            <SideNav ref={el => (this.sideNavRef = el)} />
          </Container>
        );
      }
    }

    return <PageContainer />;
  })
  .add('With content', () => {
    class PageContainer extends Component {
      handleOpenSideNav = () => {
        this.sideNavRef.toggle();
      };

      render() {
        return (
          <Container>
            <SideNav ref={el => (this.sideNavRef = el)} />
            <div>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
              <p>Eiusmod aute incididunt nisi Lorem nostrud minim officia duis mollit.</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <button type="button" onClick={this.handleOpenSideNav}>
                toggle Menu
              </button>
            </div>
          </Container>
        );
      }
    }

    return <PageContainer />;
  })
  .add('With user navigation', () => (
    <Container>
      <SideNav
        isOpen
        logoUrl="http://via.placeholder.com/64x64"
        userNav={() => (
          <MenuDropdown
            firstName="James Bond"
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
            arrow={false}
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
        )}
      />
    </Container>
  ));
