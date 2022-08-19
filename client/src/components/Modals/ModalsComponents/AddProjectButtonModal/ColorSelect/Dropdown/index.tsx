import { forwardRef } from 'react';

import { Container, Wrapper } from './styled';

interface Props {
  children: React.ReactNode;
}

export const Dropdown = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { children } = props;

    return (
      <Wrapper ref={ref}>
        <Container>{children}</Container>
      </Wrapper>
    );
  }
);
