export enum ColorMode {
  light = 'light',
  dark = 'dark',
}

export type ColorModes = {
  [keyof in ColorMode]: string;
};

const baseDefaultColor = '#4c6d8a';

const colors = {
  commons: {
    white: '#ffffff',
    black: '#000000',
  },
  shadows: {
    base: 'rgba(99, 99, 99, 0.08)',
  },
  text: {
    highDark: `rgba(0, 0, 0, 0.8)`,
    mediumDark: `rgba(0, 0, 0, 0.62)`,
    lowDark: `rgba(0, 0, 0, 0.32)`,
    lowLight: `rgba(255, 255, 255, 0.32)`,
    mediumLight: `rgba(255, 255, 255, 0.64)`,
    highLight: `rgba(255, 255, 255, 0.9)`,
  },
  red: {
    base: 'red',
  },
  green: {
    base: 'green',
  },
  orange: {
    variant1: '#ff934b',
  },
  gray: {
    variant1: '#eff7fa',
    variant2: '#e1e1e1',
    variant3: '#888',
  },
  base: {
    default: baseDefaultColor,
  },
};

export default colors;
