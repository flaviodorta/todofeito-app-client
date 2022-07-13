import { AllProjectsListContainerProps } from './AllProjectList.types';

import { AllProjectsListContainer } from './AllProjectList.styled';

export function AllProjectsList(props: AllProjectsListContainerProps): JSX.Element {
  const { isAllProjectsListOpen, children } = props;

  return (
    <AllProjectsListContainer isAllProjectsListOpen={isAllProjectsListOpen}>
      {children}
    </AllProjectsListContainer>
  );
}
