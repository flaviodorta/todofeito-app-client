import { Container } from './styled';

interface Props {
  children: React.ReactNode;
}

export function Wrapper(props: Props): JSX.Element {
  const { children } = props;

  return <Container>{children}</Container>;
}
