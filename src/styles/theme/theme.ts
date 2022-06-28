import { DefaultTheme } from 'styled-components';

const base = {
  secondaryOne: '#FFFFFF',
  secondaryTwo: '#ECECEC',
  secondaryThree: '#F9F9F9',
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
    primaryOne: '#00e640',
    primaryTwo: '#2ecc71',
    primaryThree: '#93faa5',
    font: '#030303',
  },
};

export const dark: DefaultTheme = {
  mode: 'dark',
  colors: {
    ...base,
    primaryOne: '#121212',
    primaryTwo: '#181818',
    primaryThree: '#282828',
    primaryFour: '#404040',
    font: '#FFFFFF',
  },
};
