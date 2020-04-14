import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import styled from 'styled-components';
import SideNav from './';

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
      <SideNav isOpen userNav logoUrl="http://via.placeholder.com/64x64" />
    </Container>
  ));
