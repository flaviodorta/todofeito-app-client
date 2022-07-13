import styled from 'styled-components';

import { AllProjectsListContainerProps } from './AllProjectList.types';

export const AllProjectsListContainer = styled.ul<AllProjectsListContainerProps>`
  width: 100%;
  transition: height 0.3 ease;

  height: ${(props) => (props.isAllProjectsListOpen ? '30rem' : 0)};
`;
