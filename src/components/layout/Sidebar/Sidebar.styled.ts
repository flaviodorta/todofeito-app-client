import styled from 'styled-components';
import { breakpoints } from '../../../styles/theme/theme';
import { SidebarContainerProps } from './Sidebar.types';

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  position: fixed;
  min-height: 100%;
  padding: 2rem 0 7rem 5.5rem;
  z-index: 3;
  user-select: none;
  transition: margin-left 0.125s ease;

  @media screen and (max-width: ${breakpoints.md}) {
  }

  background-color: ${(props) => props.theme.colors.white.two};
  width: ${(props) =>
    props.resizeabledWidth ? props.resizeabledWidth : props.initialWidth};
  margin-left: ${(props) =>
    props.isSidebarOpen ? '0' : `-${props.resizeabledWidth}`};
`;

export const SidebarOptionsList = styled.ul`
  li {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    &:nth-child(4) {
      margin-bottom: 2rem;
    }
  }
`;

export const SidebarResizer = styled.div`
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
