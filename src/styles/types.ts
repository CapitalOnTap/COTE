export interface ThemeColors {
  primary: string;
  primaryEmphasis: string;
  secondary: string;
  secondaryEmphasis: string;
  default: string;
  defaultLight: string;
  danger: string;
  dangerEmphasis;
  success: string;
  shadow: string;
  darkGrey: string;
  lightGrey: string;
}

export interface ThemeFontWeights {
  bold: string;
  medium: string;
  normal: string;
  light: string;
}

export interface Theme {
  colorHeading: string,
  colorDefault: string,
  colorDefaultLight: string,
  colorShadow: string,
  colorBackground: string,
  colorHighlight: string,
  colorPrimary: string,
  colorPrimaryEmphasis: string,
  colorSecondary: string,
  colorSecondaryEmphasis: string,
  colorDanger: string,
  colorDangerEmphasis: string,
  colorDangerLight: string,
  colorInfo: string,
  colorSuccess: string,
  colorDarkGrey: string,
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
