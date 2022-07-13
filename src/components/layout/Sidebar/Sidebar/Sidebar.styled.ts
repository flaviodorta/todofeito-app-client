import styled from 'styled-components';
import { breakpoints } from '../../../../styles/theme/theme';
import { AsideProps } from './Sidebar.types';

export const Aside = styled.aside<AsideProps>`
  position: fixed;
  width: ${(props) =>
    props.resizeabledWidth ? props.resizeabledWidth : props.initialWidth};
  min-height: 100%;
  background-color: ${(props) => props.theme.colors.white.two};
  user-select: none;

  z-index: 3;

  margin-left: ${(props) =>
    props.isSidebarOpen ? '0' : `-${props.resizeabledWidth}`};

  padding: 2rem 0 7rem 5.5rem;

  transition: margin-left 0.125s ease;

  @media screen and (max-width: ${breakpoints.md}) {
  }
`;

export const Ul = styled.ul`
  li {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    &:nth-child(4) {
      margin-bottom: 2rem;
    }
  }
`;

export const Resizer = styled.div`
  position: absolute;
  cursor: col-resize;
  height: 100%;
  top: 0;
  right: 0;
  width: 5px;
  z-index: 3;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey.one};
  }
`;
