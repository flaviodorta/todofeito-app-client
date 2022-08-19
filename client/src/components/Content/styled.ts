import styled from 'styled-components';

export const Content = styled.div<{
  isSidebarOpen: boolean;
}>`
  width: 100%;
  min-height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding-top: 4rem;

  transition: margin-left 0.125s ease;

  transition-delay: 0.065s;
`;
