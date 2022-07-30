import { Props } from './AllProjectList.types';

import { Container } from './AllProjectList.styled';

export function AllProjectsList(props: Props): JSX.Element {
  const { isAllProjectsListOpen, children } = props;

  return (
    <Container isAllProjectsListOpen={isAllProjectsListOpen}>{children}</Container>
  );
}
