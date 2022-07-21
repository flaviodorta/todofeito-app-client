import { useDispatch } from 'react-redux';
import { todosActions } from '../../../../store/store';
import { ModalWrapperContainer } from './ModalWrapper.styled';
import { ModalWrapperProps } from './ModalWrapper.types';

export function ModalWrapper(props: ModalWrapperProps): JSX.Element {
  const { children } = props;

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(todosActions.showModal(null));
  };

  return (
    <ModalWrapperContainer onClick={closeModal}>{children}</ModalWrapperContainer>
  );
}
