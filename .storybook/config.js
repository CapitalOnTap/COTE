import { setDefaults, withInfo } from '@storybook/addon-info';
import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalStyle as StorybookGlobalStyle } from './styles/GlobalStyle';

const styles = {
  margin: '100px auto',
  maxWidth: '1024px'
};

const theme = {
  colorPrimary: '#27B161',
  colorDarkGrey: '#A4AAB3',
  colorShadow: '#000000',
  colorLightBlack: 'rgba(6, 31, 51, 0.7)',
  colorBlack: 'rgba(6, 31, 51, 1)',
  colorPrimaryEmphasis: '#148443',
  colorDanger: '#FF7183',
  colorLightGrey: '#f3f3f3'
};

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: [
    /* Components used in story */
  ], // displays Prop Tables with this components
  propTablesExclude: [], // Exclude Components from being shown in Prop Tables section. Accepts an array of component classes or functions.
  styles: {}, // Overrides styles of addon. The object should follow this shape: https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19. This prop can also accept a function which has the default stylesheet passed as an argument.
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 10, // Displays the first 10 characters of the prop name
  maxPropArrayLength: 10, // Displays the first 10 items in the default prop array
  maxPropStringLength: 100 // Displays the first 100 characters in the default prop string,
});

//decorators
const LayoutDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <div style={styles}>{storyFn()}</div>
      <GlobalStyle />
      <StorybookGlobalStyle />
    </React.Fragment>
  </ThemeProvider>
);

addDecorator((story, context) => withInfo('Info')(story)(context));
addDecorator(LayoutDecorator);
// addDecorator(action);
// addDecorator(withKnobs);

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
