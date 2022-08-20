import React, { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions, useAppSelector } from '../../../../redux/store';

import { Container } from './styled';

interface Props {
  onClick?: (e: any) => any;
}

export const Background = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { shouldShowSelectColor } = useAppSelector((state) => state.ui);
    const dispatch = useDispatch();

    const closeModal = (e: React.SyntheticEvent) => {
      if (!shouldShowSelectColor) {
        dispatch(uiActions.setModalShowIs('none'));
      }
      if (shouldShowSelectColor) {
        dispatch(uiActions.setShouldShowSelectColor());
      }
    };

    return <Container ref={ref} onClick={(e) => closeModal(e)} />;
  }
);
