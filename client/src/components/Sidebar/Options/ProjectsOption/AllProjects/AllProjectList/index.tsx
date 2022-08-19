import { Container } from './styled';

interface Props {
  children: React.ReactNode;
  isAllProjectsListOpen: boolean;
}

export function AllProjectsList(props: Props): JSX.Element {
  const { isAllProjectsListOpen, children } = props;

  return (
    <Container isAllProjectsListOpen={isAllProjectsListOpen}>{children}</Container>
  );
}
