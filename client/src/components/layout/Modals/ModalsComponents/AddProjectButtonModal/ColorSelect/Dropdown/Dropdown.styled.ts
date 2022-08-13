import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow-y: hidden;
  width: 100%;
  border-radius: 5.5px;
  height: 25rem;
  position: absolute;
  left: 0;
  top: 3rem;

  background-color: ${(props) => props.theme.colors.white.one};
  border: 1px solid ${(props) => props.theme.colors.grey.two};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5.5px;

  padding: 0.5rem 1rem;

  height: 25rem;
  background-color: ${(props) => props.theme.colors.white.one};

  overflow-x: hidden;
  overflow-y: scroll;
`;
