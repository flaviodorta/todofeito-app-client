import React, { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions, useAppSelector } from '../../../../redux/store';

import { Container } from './styled';

interface Props {
  onClick?: (e: any) => any;
  hasBackground?: boolean;
  setShouldShowModal: () => void;
}

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.125,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.125,
    },
  },
};

export const Background = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { setShouldShowModal } = props;
    const dispatch = useDispatch();
    const { shouldShowSelectColor } = useAppSelector((state) => state.ui);

    const closeModal = () => {
      if (!shouldShowSelectColor) {
        setShouldShowModal();
      }
      if (shouldShowSelectColor) {
        dispatch(uiActions.setShouldShowSelectColor());
      }
    };

    return (
      <Container
        ref={ref}
        onClick={() => closeModal()}
        hasBackground={props.hasBackground}
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      />
    );
  }
);
