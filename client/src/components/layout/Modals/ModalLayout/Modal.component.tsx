import { Props } from './Modal.types';

import { Background } from './Background/Background.component';
import { Wrapper } from './Wrapper/Wrapper.component';
import { forwardRef } from 'react';

export const Modal = forwardRef<HTMLDivElement, Props>((props, ref): JSX.Element => {
  return (
    <Wrapper>
      <Background ref={ref} />
      {props.children}
    </Wrapper>
  );
});
