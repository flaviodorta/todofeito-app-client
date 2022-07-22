import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { RootState, todosActions } from '../../../../../store/store';

import { ModalBackgroundProps } from './ModalBackground.types';
import { ModalBackgroundContainer } from './ModalBackground.styled';

import './ModalBackground.css';

export function ModalBackground(props: ModalBackgroundProps): JSX.Element {
  const dispatch = useDispatch();
  const { modal, select } = useSelector((state: RootState) => state);

  const closeModal = () => {
    if (select) {
      dispatch(todosActions.toggleSelect(false));
    } else {
      dispatch(todosActions.showModal(false));
    }
  };

  let isModalOpen = modal !== false;

  return (
    <CSSTransition
      in={isModalOpen}
      timeout={125}
      classNames='modal'
      unmountOnExit
      onEntered={() => console.log('cu')}
    >
      <ModalBackgroundContainer onClick={closeModal} />
    </CSSTransition>
  );
}
