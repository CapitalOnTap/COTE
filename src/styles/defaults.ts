import { hexToRgbA } from '../utils/index';
import { ThemeColors, ThemeFontWeights, Theme } from './types';

export const colors: ThemeColors = {
  primary: '#27B161',
  primaryEmphasis: '#148443',
  black: 'rgba(6, 31, 51, 1)',
  lightBlack: 'rgba(6, 31, 51, 0.7)',
  darkGrey: '#A4AAB3',
  danger: '#FF7183',
  success: '#27B161',
  shadow: '#000000',
  lightGrey: '#f3f3f3'
};

export const fontWeights: ThemeFontWeights = {
  bold: '700',
  medium: '500',
  normal: '400',
  light: '300'
};

export const theme: Theme = {
  colorPrimary: '#27B161',
  colorDarkGrey: '#A4AAB3',
  colorShadow: '#000000',
  colorLightBlack: '#061F33',
  colorPrimaryDark: '#148443',
  colorBlack: '#061f33',
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
