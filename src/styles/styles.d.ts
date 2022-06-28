import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    colors: {
      primaryOne: string;
      primaryTwo: string;
      primaryThree: string;
      primaryFour?: string;
      secondaryOne: string;
      secondaryTwo: string;
      secondaryThree: string;
      red: string;
      orange: string;
      yellow: string;
      blue: string;
      purple: string;
      font: string;
    };
  }
}
