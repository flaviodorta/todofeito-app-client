import { forwardRef } from 'react';

import { Wrapper } from './Wrapper';
import { Background } from './Background';

interface Props {
  children: React.ReactNode;
  hasBackground?: boolean;
  setShouldShowModal: () => void;
}

export const Modal = forwardRef<HTMLDivElement, Props>((props, ref): JSX.Element => {
  const { setShouldShowModal } = props;

  return (
    <Wrapper>
      <Background
        ref={ref}
        hasBackground={props.hasBackground}
        setShouldShowModal={setShouldShowModal}
      />
      {props.children}
    </Wrapper>
  );
});
