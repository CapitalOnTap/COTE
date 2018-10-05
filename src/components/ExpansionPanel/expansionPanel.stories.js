import { storiesOf } from '@storybook/react';
import React from 'react';
import ScrollableContainer from '../atoms/ScrollBar';
import ExpansionPanel from './index';

// const ScrollableScontainer = styled.div`
//   overflow: hidden;
//   max-height: 600px;
// `;

storiesOf('ExpansionPanel', module)
  .add('Single with content', () => (
    <ExpansionPanel>
      <p>
        Pariatur eiusmod quis eiusmod deserunt mollit cupidatat duis irure qui
        excepteur consequat. In occaecat excepteur proident eiusmod. Lorem
        deserunt nostrud consequat exercitation veniam non incididunt ipsum est
        irure. Fugiat eiusmod consectetur commodo mollit ut non. Ex sit mollit
        elit exercitation. Magna laborum nulla reprehenderit incididunt nisi
        exercitation sunt quis eiusmod fugiat nulla sunt laborum.
      </p>
      <p>
        Pariatur eiusmod quis eiusmod deserunt mollit cupidatat duis irure qui
        excepteur consequat. In occaecat excepteur proident eiusmod. Lorem
        deserunt nostrud consequat exercitation veniam non incididunt ipsum est
        irure. Fugiat eiusmod consectetur commodo mollit ut non. Ex sit mollit
        elit exercitation. Magna laborum nulla reprehenderit incididunt nisi
        exercitation sunt quis eiusmod fugiat nulla sunt laborum.
      </p>
      <p>
        Pariatur eiusmod quis eiusmod deserunt mollit cupidatat duis irure qui
        excepteur consequat. In occaecat excepteur proident eiusmod. Lorem
        deserunt nostrud consequat exercitation veniam non incididunt ipsum est
        irure. Fugiat eiusmod consectetur commodo mollit ut non. Ex sit mollit
        elit exercitation. Magna laborum nulla reprehenderit incididunt nisi
        exercitation sunt quis eiusmod fugiat nulla sunt laborum.
      </p>
      <p>
        Pariatur eiusmod quis eiusmod deserunt mollit cupidatat duis irure qui
        excepteur consequat. In occaecat excepteur proident eiusmod. Lorem
        deserunt nostrud consequat exercitation veniam non incididunt ipsum est
        irure. Fugiat eiusmod consectetur commodo mollit ut non. Ex sit mollit
        elit exercitation. Magna laborum nulla reprehenderit incididunt nisi
        exercitation sunt quis eiusmod fugiat nulla sunt laborum.
      </p>
    </ExpansionPanel>
  ))
  .add('Multiple with content', () => (
    <div>
      <ExpansionPanel>
        <p>
          Pariatur eiusmod quis eiusmod deserunt mollit cupidatat duis irure qui
          excepteur consequat. In occaecat excepteur proident eiusmod. Lorem
          deserunt nostrud consequat exercitation veniam non incididunt ipsum
          est irure. Fugiat eiusmod consectetur commodo mollit ut non. Ex sit
          mollit elit exercitation. Magna laborum nulla reprehenderit incididunt
          nisi exercitation sunt quis eiusmod fugiat nulla sunt laborum.
        </p>
      </ExpansionPanel>
      <ExpansionPanel>
        <div style={{ padding: '1rem' }}>
          <p>
            Pariatur eiusmod quis eiusmod deserunt mollit cupidatat duis irure
            qui excepteur consequat. In occaecat excepteur proident eiusmod.
            Lorem deserunt nostrud consequat exercitation veniam non incididunt
            ipsum est irure. Fugiat eiusmod consectetur commodo mollit ut non.
            Ex sit mollit elit exercitation. Magna laborum nulla reprehenderit
            incididunt nisi exercitation sunt quis eiusmod fugiat nulla sunt
            laborum.
          </p>
        </div>
      </ExpansionPanel>
    </div>
  ))
  .add('Single with styled content', () => (
    <ExpansionPanel>
      <div style={{ padding: '1rem', border: '1px solid red' }}>
        <p>
          Pariatur eiusmod quis eiusmod deserunt mollit cupidatat duis irure qui
          excepteur consequat. In occaecat excepteur proident eiusmod. Lorem
          deserunt nostrud consequat exercitation veniam non incididunt ipsum
          est irure. Fugiat eiusmod consectetur commodo mollit ut non. Ex sit
          mollit elit exercitation. Magna laborum nulla reprehenderit incididunt
          nisi exercitation sunt quis eiusmod fugiat nulla sunt laborum.
        </p>
      </div>
    </ExpansionPanel>
  ))
  .add('Within scrollable container', () => (
    <ScrollableContainer>
      <ExpansionPanel>
        <div style={{ padding: '1rem' }}>
          <p>
            Pariatur eiusmod quis eiusmod deserunt mollit cupidatat duis irure
            qui excepteur consequat. In occaecat excepteur proident eiusmod.
            Lorem deserunt nostrud consequat exercitation veniam non incididunt
            ipsum est irure. Fugiat eiusmod consectetur commodo mollit ut non.
            Ex sit mollit elit exercitation. Magna laborum nulla reprehenderit
            incididunt nisi exercitation sunt quis eiusmod fugiat nulla sunt
            laborum.
          </p>
        </div>
      </ExpansionPanel>
      <ExpansionPanel>
        <div style={{ padding: '1rem' }}>
          <p>
            Pariatur eiusmod quis eiusmod deserunt mollit cupidatat duis irure
            qui excepteur consequat. In occaecat excepteur proident eiusmod.
            Lorem deserunt nostrud consequat exercitation veniam non incididunt
            ipsum est irure. Fugiat eiusmod consectetur commodo mollit ut non.
            Ex sit mollit elit exercitation. Magna laborum nulla reprehenderit
            incididunt nisi exercitation sunt quis eiusmod fugiat nulla sunt
            laborum.
          </p>
        </div>
      </ExpansionPanel>
      <ExpansionPanel>
        <div style={{ padding: '1rem' }}>
          <p>
            Pariatur eiusmod quis eiusmod deserunt mollit cupidatat duis irure
            qui excepteur consequat. In occaecat excepteur proident eiusmod.
            Lorem deserunt nostrud consequat exercitation veniam non incididunt
            ipsum est irure. Fugiat eiusmod consectetur commodo mollit ut non.
            Ex sit mollit elit exercitation. Magna laborum nulla reprehenderit
            incididunt nisi exercitation sunt quis eiusmod fugiat nulla sunt
            laborum.
          </p>
        </div>
      </ExpansionPanel>
    </ScrollableContainer>
  ));
