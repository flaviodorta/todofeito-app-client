import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export type ContentProps = {
  isSidebarOpen: boolean;
};

export const Content = styled.div<ContentProps>`
  width: 100%;
  min-height: 100vh;
  margin-left: ${(props) => (props.isSidebarOpen ? '30rem' : '0')};

  display: flex;
  justify-content: center;
  padding: 4rem 10rem;

  transition: margin-left 0.125s ease;

  transition-delay: 0.065s;

  /* background-color: yellow; */
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
`;
