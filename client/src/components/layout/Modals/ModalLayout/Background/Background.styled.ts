import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 99;
`;
