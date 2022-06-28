import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;

    colors: {
      primary: {
        one: string;
        two: string;
        three: string;
        four?: string;
      };
      secondary: {
        one: string;
        two: string;
        three: string;
      };
      red: string;
      orange: string;
      yellow: string;
      blue: string;
      purple: string;
      font: string;
    };
  }
}
