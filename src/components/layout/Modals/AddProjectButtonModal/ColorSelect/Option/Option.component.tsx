import { Container } from './Option.styled';

import { Props } from './Option.types';

export function Option(props: Props): JSX.Element {
  const { children, icon } = props;

  return (
    <Container>
      {icon ?? icon}
      {children}
    </Container>
  );
}
