import styled from 'styled-components';

export const Container = styled.ul<{
  isAllProjectsListOpen: boolean;
}>`
  width: 100%;
  transition: height 0.3 ease;

  height: ${(props) => (props.isAllProjectsListOpen ? '30rem' : 0)};
`;
