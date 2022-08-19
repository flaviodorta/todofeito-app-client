import { Container } from './Wrapper.styled';
import { Props } from './Wrapper.types';

export function Wrapper(props: Props): JSX.Element {
  const { children } = props;

  return <Container>{children}</Container>;
}
