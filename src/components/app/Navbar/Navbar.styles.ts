import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components';
import { Link } from 'react-router-dom';
import { HoveredDivProps, InputProps } from './Navbar.types';

const inputOpenCSS = <T, P extends DefaultTheme>(props: ThemedStyledProps<T, P>) => css`
  background-color: ${props.theme.colors.white};
  color: ${props.theme.colors.font};

  transition: color 0.125s ease, background-color 0.175s ease;
`;

const searchIconOpenInputCSS = <T, P extends DefaultTheme>(props: ThemedStyledProps<T, P>) => css`
  fill: ${(props) => props.theme.colors.primary.one};

  transition: fill 0.125s ease;
`;

export const Nav = styled.nav`
  height: 4.8rem;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary.one};
  display: flex;
  padding: 1.2rem 8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme.colors.white};

  font-size: 1.35rem;
  font-weight: 100;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;

  li:not(:last-child) {
    margin-right: 0.54rem;
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
    left: 1.4rem;
    fill: ${(props) => props.theme.colors.white};

    transition: fill 0.125s ease;
  }
`;

export const NavIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all 0.225 ease;
  padding: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.19);
    transition: all 0.225 ease;
  }
`;

export const NavLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const Input = styled.input<InputProps>`
  margin-left: -1.6rem;
  text-indent: 3.8rem;
  padding: 0.6rem 0.4rem;
  border-radius: 3px;
  border: none;
  outline: none;
  color: inherit;
  background-color: rgba(255, 255, 255, 0.21);

  transition: color 0.125s ease, background-color 0.175s ease;

  &:hover {
    &${Nav} {
      background-color: red;
    }

    #search-icon {
      fill: red;
    }
  }

  ${(props) =>
    (props.isInputHover || props.isInputOpen) &&
    css`
      &::placeholder {
        color: ${props.theme.colors.grey.one};
      }
    `}
`;

export const HoveredDiv = styled.div<HoveredDivProps>`
  ${(props) =>
    props.isInputOpen &&
    css`
      input {
        ${inputOpenCSS(props)}
        width: 30rem;
      }

      & #search-icon {
        ${searchIconOpenInputCSS(props)}
      }
    `}

  ${(props) =>
    props.isInputHover &&
    css`
      input {
        ${inputOpenCSS(props)};
      }

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
  margin-left: -2.3rem;
  cursor: pointer;

  transition: all 0.125s ease;

  font-size: 1rem;
  color: ${(props) => props.theme.colors.grey.one};
`;
