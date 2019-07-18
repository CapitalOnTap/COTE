import { hexToRgbA } from '../utils/index';
import { ThemeColors, ThemeFontWeights, Theme } from './types';

export const colors: ThemeColors = {
  primary: '#466BAF',
  primaryEmphasis: '#2C436D',
  secondary: '#F2C14A',
  secondaryEmphasis: '#F5A623',
  default: '#273456',
  defaultLight: '#96A6CF',
  danger: '#CC5767',
  dangerEmphasis: '#9C303E',
  info: '#466BAF',
  success: '#27B161',
  shadow: '#000000',
  darkGrey: '#696D7E',
  lightGrey: '#f5f7f8',
  highlight: '#C0DDEB',
  navigationBackground: '#273456',
  disabledBackgroundColor: 'rgba(0, 0, 0, .12)',
  disabledColor: 'rgba(0, 0, 0, 0.26)'
};

export const fontWeights: ThemeFontWeights = {
  bold: '700',
  medium: '500',
  normal: '400',
  light: '300'
};

export const theme: Theme = {
  colorDefault: '#273456',
  colorDefaultLight: '#96A6CF',
  colorShadow: '#000000',
  colorBackground: '#F5F7F8',
  colorHighlight: '#C0DDEB',
  colorPrimary: '#466BAF',
  colorPrimaryEmphasis: '#2C436D',
  colorSecondary: '#F2C14A',
  colorSecondaryEmphasis: '#F5A623',
  colorDanger: '#CC5767',
  colorDangerEmphasis: '#9C303E',
  colorDangerLight: '#E7B1B8',
  colorInfo: '#466BAF',
  colorSuccess: '#27B161',
  colorDarkGrey: '#696D7E',
  colorLightGrey: '#E8EBEE',
  colorNavigationBackground: '#273456',
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
