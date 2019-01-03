import * as React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyle";

const theme = {
  colorPrimary: "#27B161",
  colorDarkGrey: "#A4AAB3",
  colorShadow: "#000000",
  colorLightBlack: "rgba(6, 31, 51, 0.7)",
  colorBlack: "rgba(6, 31, 51, 1)",
  colorPrimaryEmphasis: "#148443",
  colorDanger: "#FF7183",
  colorLightGrey: "#f3f3f3"
};

const styles = {
  margin: "100px auto",
  maxWidth: "1024px"
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
