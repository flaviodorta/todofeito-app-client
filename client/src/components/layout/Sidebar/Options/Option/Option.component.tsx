import { Container, Content, TodoCount } from './Option.styled';

import { Props } from './Option.types';

export function Option(props: Props): JSX.Element {
  return (
    <Container>
      <Content>{props.children}</Content>
      <TodoCount>{props.todoCount}</TodoCount>
    </Container>
  );
}
