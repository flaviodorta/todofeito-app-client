import { Props } from './Background.types';
import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, globalActions } from '../../../../../redux/store';

import { Container } from './Background.styled';

import './Background.css';

export const Background = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { isSelectOpen } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const closeModal = (e: React.SyntheticEvent) => {
      if (!isSelectOpen) {
        dispatch(globalActions.setModal(''));
      }
      if (isSelectOpen) {
        dispatch(globalActions.toggleSelect(false));
      }
    };

    return <Container ref={ref} onClick={(e) => closeModal(e)} />;
  }
);
