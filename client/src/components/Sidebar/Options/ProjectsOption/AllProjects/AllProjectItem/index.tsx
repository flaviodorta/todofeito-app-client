import { Container, Content } from './styled';

import { CircleSolidIcon as CircleIcon } from '../../../../../Icons';

interface Props {
  children: React.ReactNode;
  isAllProjectsListOpen: boolean;
}

export function AllProjectsItem(props: Props): JSX.Element {
  const { isAllProjectsListOpen, children } = props;

  return (
    <Container isAllProjectsListOpen={isAllProjectsListOpen}>
      <Content isAllProjectsListOpen={isAllProjectsListOpen}>
        <CircleIcon height={'10px'} width={'10px'} />
        {children}
      </Content>
    </Container>
  );
}
