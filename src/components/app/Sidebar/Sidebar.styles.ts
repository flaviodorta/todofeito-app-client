import styled from 'styled-components';

export type AsideProps = {
  isSidebarOpen: boolean;
};

export const Aside = styled.aside<AsideProps>`
  position: fixed;
  width: 18vw;
  min-height: 100%;
  background-color: red;

  margin-left: ${(props) => (props.isSidebarOpen ? '0' : '-18vw')};

  padding: 8rem 8rem;

  transition: margin-left 0.125s ease;

  ul {
    li:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
