import { css } from 'styled-components';
import { MediaQuerie } from '../../types/types';

export const breakpoint = {
  sm: '480px',
  md: '768px',
  lg: '976px',
  xl: '1440px',
};

export const mediaQuerie: MediaQuerie = {
  sm: (style) =>
    css`
      @media screen and (min-width: ${breakpoint.md}) {
        ${css`
          ${style}
        `}
      }
    `,

  md: (style) => css`
    @media screen and (min-width: ${breakpoint.md}) {
      ${css`
        ${style}
      `}
    }
  `,

  lg: (style) => css`
    @media screen and (min-width: ${breakpoint.lg}) {
      ${css`
        ${style}
      `}
    }
  `,

  xl: (style) => css`
    @media screen and (min-width: ${breakpoint.xl}) {
      ${css`
        ${style}
      `}
    }
  `,
};
