import { Container, Content, TodoCount } from './Option.styled';

export interface Props {
  children: React.ReactNode;
  todoCount: number;
  onClick: () => void;
}

export function Option(props: Props): JSX.Element {
  const { onClick, children, todoCount } = props;
  return (
    <Container onClick={onClick}>
      <Content>{children}</Content>
      <TodoCount>{todoCount}</TodoCount>
    </Container>
  );
}
