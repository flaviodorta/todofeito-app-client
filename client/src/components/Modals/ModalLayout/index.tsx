import { forwardRef } from 'react';

import { Wrapper } from './Wrapper';
import { Background } from './Background';

interface Props {
  children: React.ReactNode;
  hasBackground?: boolean;
}

export const Modal = forwardRef<HTMLDivElement, Props>((props, ref): JSX.Element => {
  return (
    <Wrapper>
      <Background ref={ref} hasBackground={props.hasBackground} />
      {props.children}
    </Wrapper>
  );
});
