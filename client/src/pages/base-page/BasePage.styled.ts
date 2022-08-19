import styled from 'styled-components';
import { ContentProps } from './BasePage.types';

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  min-height: 100vh;
  margin-left: ${(props) => (props.isSidebarOpen ? '30rem' : '20rem')};

  z-index: 100;
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  padding-left: 33rem;

  transition: margin-left 0.125s ease;

  transition-delay: 0.065s;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
`;
