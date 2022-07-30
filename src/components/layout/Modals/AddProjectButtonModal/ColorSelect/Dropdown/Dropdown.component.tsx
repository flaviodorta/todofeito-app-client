import { Container, Wrapper } from './Dropdown.styled';
import { Props } from './Dropdown.types';

export function Dropdown(props: Props): JSX.Element {
  const { children } = props;

  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}
