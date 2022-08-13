import styled from 'styled-components';

import { ContainerProps } from './AllProjectList.types';

export const Container = styled.ul<ContainerProps>`
  width: 100%;
  transition: height 0.3 ease;

  height: ${(props) => (props.isAllProjectsListOpen ? '30rem' : 0)};
`;
