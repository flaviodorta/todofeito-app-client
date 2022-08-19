import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components';
import { breakpoints } from '../../styles/theme/theme';

import { HoveredButtonProps, HoveredDivProps, InputProps } from './Navbar.types';

const inputOpenCSS = <P, T extends DefaultTheme>(
  props: ThemedStyledProps<P, T>
) => css`
  background-color: ${props.theme.colors.white.one};
  color: ${props.theme.colors.font};

  transition: color 0.125s ease, background-color 0.175s ease;
`;

const searchIconOpenInputCSS = <P, T extends DefaultTheme>(
  props: ThemedStyledProps<P, T>
) => css`
  fill: ${(props) => props.theme.colors.primary.one};

  transition: fill 0.125s ease;
`;

// navbar semantic layout styles

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 300;

  color: ${(props) => props.theme.colors.white.one};
  background-color: ${(props) => props.theme.colors.primary.one};

  font-weight: 100;
  height: 4.8rem;
  width: 100vw;

  font-size: 1.35rem;

  padding: 1.2rem 2rem;

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 1.2rem 6rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;

  li:not(:last-child) {
    margin-right: 0.54rem;
  }

  &:nth-child(2) li:not(:last-child) {
    margin-right: 1.11rem;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;

  svg {
    z-index: 2;
  }

  #search-icon {
    width: 1.7rem;
    height: 1.7rem;
    position: relative;
    left: 1.3rem;
    fill: ${(props) => props.theme.colors.white.one};

    transition: fill 0.125s ease;
  }
`;

// hovered button to navbar options

export const HoveredButton = styled.button<HoveredButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.225 ease;
  padding: 0.4rem 0.8rem;

  /* height: 4.8rem; */
  /* width: auto; */
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.19);
    transition: all 0.225 ease;
  }
`;

// input styles

export const HoveredDiv = styled.div<HoveredDivProps>`
  ${(props) =>
    props.isHoveredDivFocus &&
    css`
      & #search-icon {
        ${searchIconOpenInputCSS(props)}
      }
    `}

  ${(props) =>
    props.isInputHover &&
    css`
      & #search-icon {
        ${searchIconOpenInputCSS(props)};
      }
    `}
`;

export const ShortcutInputButton = styled.button`
  background: none;
  outline: none;
  width: 1.7rem;
  height: 1.7rem;
  border: 1px solid ${(props) => props.theme.colors.grey.two};
  border-radius: 2px;
  cursor: pointer;

  position: absolute;
  right: 1rem;

  transition: all 0.125s ease;

  font-size: 1rem;
  color: ${(props) => props.theme.colors.grey.three};
`;

export const Input = styled.input<InputProps>`
  margin-left: -1.3rem;
  text-indent: 3.3rem;
  padding: 0.6rem 0.4rem;
  border-radius: 3px;
  border: none;
  outline: none;
  color: inherit;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.21);

  transition: color 0.135s ease, background-color 0.135s ease, width 0.195s ease;

  ${(props) =>
    (props.isInputHover || props.isHoveredDivFocus) &&
    css`
      &::placeholder {
        color: ${props.theme.colors.grey.three};
      }
    `}

  ${(props) =>
    props.isInputHover &&
    css`
      ${inputOpenCSS(props)};

      transition: color 0.135s ease, background-color 0.135s ease, width 0.135s ease;
    `}

  ${(props) =>
    props.isHoveredDivFocus &&
    css`
      ${inputOpenCSS(props)}
      width: 35rem;

      transition: color 0.135s ease, background-color 0.135s ease, width 0.135s ease;
    `}
`;
