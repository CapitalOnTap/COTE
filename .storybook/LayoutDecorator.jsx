import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import { hexToRgbA } from '../src/utils/index';

const theme = {
  colorHeading: "#466BAF",
  colorDefault: "#273456",
  colorShadow: "#000000",
  colorBackground: "#F5F7F8",
  colorHighlight: "#C0DDEB",
  colorPrimary: "#466BAF",
  colorPrimaryEmphasis: "#2C436D",
  colorSecondary: "#F2C14A",
  colorSecondaryEmphasis: "#F5A623",
  colorDanger: "#CC5767",
  colorDangerEmphasis: "#9C303E",
  colorDangerLight: "#E7B1B8",
  colorInfo: "#466BAF",
  colorSuccess: "#27B161",
  colorDarkGrey: "#696D7E",
  colorLightGrey: "#E8EBEE",
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
