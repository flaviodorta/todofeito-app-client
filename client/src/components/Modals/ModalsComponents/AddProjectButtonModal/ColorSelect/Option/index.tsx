import { Container } from './styled';

interface Props {
  children: React.ReactNode;
  icon: JSX.Element;
  ref: React.MutableRefObject<null>;
}

export function Option(props: Props): JSX.Element {
  const { children, icon } = props;

  return (
    <Container>
      {icon ?? icon}
      {children}
    </Container>
  );
}
