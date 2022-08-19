import { forwardRef } from 'react';

import { Wrapper } from './Wrapper';
import { Background } from './Background';

interface Props {
  children: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, Props>((props, ref): JSX.Element => {
  return (
    <Wrapper>
      <Background ref={ref} />
      {props.children}
    </Wrapper>
  );
});
