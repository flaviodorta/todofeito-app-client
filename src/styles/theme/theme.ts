import { DefaultTheme } from 'styled-components';

const base = {
  secondary: {
    one: '#FFFFFF',
    two: '#ECECEC',
    three: '#F9F9F9',
  },
  red: '#ff4c30',
  orange: '#e67e22',
  yellow: '#f5e51b',
  blue: '#284387',
  purple: '#a537fd',
};

export const light: DefaultTheme = {
  mode: 'light',
  colors: {
    ...base,
    primary: {
      one: '#00e640',
      two: '#2ecc71',
      three: '#93faa5',
    },
    font: '#030303',
  },
};

export const dark: DefaultTheme = {
  mode: 'dark',
  colors: {
    ...base,
    primary: {
      one: '#121212',
      two: '#181818',
      three: '#282828',
      four: '#404040',
    },
    font: '#FFFFFF',
  },
};
