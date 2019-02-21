export interface ThemeColors {
  primary: string;
  primaryEmphasis: string;
  black: string;
  lightBlack: string;
  darkGrey: string;
  danger: string;
  success: string;
  shadow: string;
  lightGrey: string;
}

export interface ThemeFontWeights {
  bold: string;
  medium: string;
  normal: string;
  light: string;
}

export interface Theme {
  colorPrimary: string,
  colorDarkGrey: string,
  colorShadow: string,
  colorDefaultLight: string,
  colorPrimaryDark: string,
  colorDefault: string,
  colorPrimaryEmphasis: string,
  colorDanger: string,
  colorDangerDark: string,
  colorLightGrey: string,
  // Elevation theme
  elevation: {
    // What property to use to apply depth
    property: string,
    // Transition for animating buttons
    transition: {
      duration: string,
      effect: string,
    },
    colors: {
      umbra: string,
      penumbra: string,
      ambient: string,
    }
  }
}
