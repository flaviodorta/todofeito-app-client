import { Fragment } from 'react';
import { BasePage } from '../base-page/BasePage.component';
import styled from 'styled-components';

export const Container = styled.div`
  z-index: 120;
  height: 100vh;
  width: 100vw;
  display: flex;
  padding-left: 10rem;
`;

export function Inbox(): JSX.Element {
  const activePage = 'inbox';

  return (
    <>
      <BasePage activePage={activePage}>
        <Container>Inbox</Container>
      </BasePage>
    </>
  );
}
