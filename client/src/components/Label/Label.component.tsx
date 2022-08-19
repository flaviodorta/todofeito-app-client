import { useElementSize } from '../../hooks/useElementSize';

import { Container } from './Label.styled';

interface Props {
  isVisible?: boolean;
  content: string | [string, string];
  parentWidth?: number;
}

export function Label(props: Props): JSX.Element {
  const [labelRef, labelSize] = useElementSize();

  const { isVisible, content, parentWidth } = props;

  return (
    <Container
      ref={labelRef}
      isVisible={isVisible}
      parentWidth={parentWidth}
      elementWidth={labelSize.width}
    >
      {content}
    </Container>
  );
}
