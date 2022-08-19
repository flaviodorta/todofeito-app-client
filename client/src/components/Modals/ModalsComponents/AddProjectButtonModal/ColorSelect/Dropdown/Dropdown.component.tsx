import { forwardRef } from 'react';
import { Container, Wrapper } from './Dropdown.styled';
import { Props } from './Dropdown.types';

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
