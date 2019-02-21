import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import { hexToRgbA } from '../src/utils/index';

const theme = {
  colorPrimary: '#27B161',
  colorDarkGrey: '#A4AAB3',
  colorShadow: '#000000',
  colorDefaultLight: '#061F33',
  colorPrimaryDark: '#148443',
  colorDefault: '#061f33',
  colorPrimaryEmphasis: '#148443',
  colorDanger: '#FF7183',
  colorDangerDark: '#ff001f',
  colorLightGrey: '#f3f3f3',
  // Elevation theme
  elevation: {
    // What property to use to apply depth
    property: 'box-shadow',
    // Transition for animating buttons
    transition: {
      duration: '280ms',
      effect: 'cubic-bezier(.4, 0, .2, 1)'
    },
    colors: {
      umbra: hexToRgbA('#000000', 0.2),
      penumbra: hexToRgbA('#000000', 0.14),
      ambient: hexToRgbA('#000000', 0.12)
    }
  }
};

const styles = {
  margin: '100px auto',
  maxWidth: '1024px'
};

const LayoutDecorator = (storyFn: Function) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <div style={styles}>{storyFn()}</div>
      <GlobalStyle />
      {/* <StorybookGlobalStyle /> */}
    </React.Fragment>
  </ThemeProvider>
);

export default LayoutDecorator;
