import styled from 'styled-components';
import { AsideProps, HoveredButtonProps } from './Sidebar.types';

// semantic styled elements to layout sidebar

export const Aside = styled.aside<AsideProps>`
  position: fixed;
  width: ${(props) =>
    props.resizeabledWidth ? props.resizeabledWidth : props.initialWidth};
  min-height: 100%;
  background-color: ${(props) => props.theme.colors.white.two};

  z-index: 3;

  margin-left: ${(props) =>
    props.isSidebarOpen ? '0' : `-${props.resizeabledWidth}`};

  padding: 3rem 0 7rem 5.5rem;

  transition: margin-left 0.125s ease;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  margin-bottom: 0;

  &:hover:not(:last-child) {
    background-color: ${(props) => props.theme.colors.white.three};
  }
`;

export const HoveredDiv = styled.div``;

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

// div to separate icon and title from right element

export const Div = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  letter-spacing: 0.5px;
  user-select: none;

  svg {
    margin-right: 1.3rem;
  }
`;

// div as column resizer at right of the sidebar

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

export const TodoCount = styled.span`
  color: ${(props) => props.theme.colors.grey.three};
  font-size: 1.4rem;
  justify-self: flex-end;
  user-select: none;
`;

export const HoveredButton = styled.div<HoveredButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: transparent;
  width: 3rem;
  height: 3rem;

  &:hover {
    background-color: rgba(200, 200, 200, 0.45);
    transition: all 0.225 ease;
  }

  opacity: ${(props) => (props.isProjectHover ? 1 : 0)};
  fill: ${(props) =>
    props.isProjectButtonHover
      ? props.theme.colors.grey.three
      : props.theme.colors.grey.two};
`;
