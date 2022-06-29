import { DefaultTheme } from 'styled-components';

export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '976px',
  xl: '1440px',
};

export const baseTheme = {
  colors: {
    secondary: {
      one: '#FFFFFF',
      two: '#ECECEC',
      three: '#F9F9F9',
    },

    white: '#FFFFFF',
    red: '#ff4c30',
    orange: '#e67e22',
    yellow: '#f5e51b',
    blue: '#284387',
    purple: '#a537fd',
  },

  sizes: {
    icon: '2rem',
  },
};

export const light: DefaultTheme = {
  mode: 'light',

  colors: {
    ...baseTheme.colors,

    primary: {
      one: '#00e640',
      two: '#2ecc71',
      three: '#93faa5',
    },

    font: '#030303',
  },

  sizes: {
    ...baseTheme.sizes,
  },
};

export const dark: DefaultTheme = {
  mode: 'dark',

  colors: {
    ...baseTheme.colors,

    primary: {
      one: '#121212',
      two: '#181818',
      three: '#282828',
      four: '#404040',
    },
    font: '#FFFFFF',
  },

  sizes: {
    ...baseTheme.sizes,
  },
};
