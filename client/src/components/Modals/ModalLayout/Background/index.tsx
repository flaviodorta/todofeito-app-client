import React, { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions, useAppSelector } from '../../../../redux/store';

import { Container } from './styled';

interface Props {
  onClick?: (e: any) => any;
}

export const Background = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { isSelectOpen } = useAppSelector((state) => state.ui);
    const dispatch = useDispatch();

    const closeModal = (e: React.SyntheticEvent) => {
      if (!isSelectOpen) {
        dispatch(uiActions.setModal(''));
      }
      if (isSelectOpen) {
        dispatch(uiActions.toggleSelect(false));
      }
    };

    return <Container ref={ref} onClick={(e) => closeModal(e)} />;
  }
);
