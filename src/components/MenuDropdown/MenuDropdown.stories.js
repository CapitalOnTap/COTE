import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';
import MenuDropdown from './MenuDropdown';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${defaultColors.default};
`;

storiesOf('MenuDropdown', module).add('Normal', () => (
  <MenuDropdown firstName="Jamie" lastName="Howard" legalName="Potatoe Farm" locatorId="F415T98" />
));

storiesOf('MenuDropdown', module).add('Small', () => (
  <MenuDropdown
    firstName="Jamie"
    lastName="Howard"
    legalName="Potatoe Farm"
    locatorId="F415T98"
    small="true"
  />
));

storiesOf('MenuDropdown', module).add('Reversed normal', () => (
  <Container>
    <MenuDropdown
      firstName="Jamie"
      lastName="Howard"
      legalName="Potatoe Farm"
      locatorId="F415T98"
      reverse
    />
  </Container>
));

storiesOf('MenuDropdown', module).add('Reversed small', () => (
  <Container>
    <MenuDropdown
      firstName="Jamie"
      lastName="Howard"
      legalName="Potatoe Farm"
      locatorId="F415T98"
      small="true"
      reverse
    />
  </Container>
));

storiesOf('MenuDropdown', module).add('No details link', () => (
  <MenuDropdown
    firstName="George Michael"
    lastName="Bluth"
    legalName="Banana Stand"
    showDetailLink={false}
    locatorId="AS12D34"
  />
));

storiesOf('MenuDropdown', module).add('Custom labels and link', () => (
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
  />
));

storiesOf('MenuDropdown', module).add('Custom icon & Right nav popup ', () => (
  <Container style={{ height: '500px' }}>
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
      reverse
      popupDirection="right"
      arrow={false}
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
  </Container>
));

storiesOf('MenuDropdown', module).add('Custom & only Icon', () => (
  <Container style={{ height: '400px' }}>
    <MenuDropdown
      firstName="Jamie"
      lastName="Howard"
      legalName="Potatoe Farm"
      locatorId="F415T98"
      reverse
      small
      popupDirection="down"
      renderLogo={() => (
        <div style={{ 'margin-right': '20px' }}>
          <svg
            width="26"
            height="26"
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
        </div>
      )}
    />
  </Container>
));
