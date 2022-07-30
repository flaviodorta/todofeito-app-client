import { useDispatch, useSelector } from 'react-redux';
import { RootState, todosActions } from '../../../../../redux/store';

import { ModalBackgroundProps } from './ModalBackground.types';
import { ModalBackgroundContainer } from './ModalBackground.styled';

import './ModalBackground.css';
import { useEventListener } from '../../../../../hooks/useEventListener';
import { useRef } from 'react';

export function ModalBackground(props: ModalBackgroundProps): JSX.Element {
  const dispatch = useDispatch();
  const { isModalOpen, isSelectOpen } = useSelector((state: RootState) => state);

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSelectOpen) {
      dispatch(todosActions.toggleSelect(false));
    } else if (!isSelectOpen) {
      dispatch(todosActions.toggleModal(false));
      dispatch(todosActions.setModal(''));
    }
  };

  const modalRef = useRef(null);

  // useEventListener('click', closeModal, modalRef);

  return <ModalBackgroundContainer ref={modalRef} onClick={(e) => closeModal(e)} />;
}
