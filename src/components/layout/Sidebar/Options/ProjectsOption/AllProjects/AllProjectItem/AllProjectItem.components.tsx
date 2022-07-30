import { Props } from './AllProjectItem.types';

import { Container, Content } from './AllProjectItem.styled';

import { CircleSolidIcon as CircleIcon } from '../../../../../../shared/icons/CircleSolid';

export function AllProjectsItem(props: Props): JSX.Element {
  const { isAllProjectsListOpen, children } = props;

  const icon10px = '10px';

  return (
    <Container isAllProjectsListOpen={isAllProjectsListOpen}>
      <Content isAllProjectsListOpen={isAllProjectsListOpen}>
        <CircleIcon height={icon10px} width={icon10px} />
        {children}
      </Content>
    </Container>
  );
}
