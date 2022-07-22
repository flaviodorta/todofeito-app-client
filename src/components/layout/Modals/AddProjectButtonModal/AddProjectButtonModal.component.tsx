import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { RootState } from '../../../../store/store';

import { ModalBackground } from '../ModalLayout/ModalBackground/ModalBackground.component';
import { ModalWrapper } from '../ModalLayout/ModalWrapper/ModalWrapper.styled';
import {
  AddProjectButtonModalContainer,
  AddProjectButtonModalContent,
  AddProjectButtonModalFormGroup,
  AddProjectButtonModalTitle,
} from './AddProjectButtonModal.styled';
import { AddProjectButtonModalProps } from './AddProjectButtonModal.types';

import './ModalBackground.css';

export function AddProjectButtonModal(
  props: AddProjectButtonModalProps
): JSX.Element {
  const { modal } = useSelector((state: RootState) => state);
  const isModalOpen = modal !== null;

  return (
    <ModalWrapper>
      <ModalBackground onClick={(e) => e.stopPropagation()} />
      <CSSTransition
        in={isModalOpen}
        timeout={125}
        classNames='modal'
        unmountOnExit
        onEntered={() => console.log('cu')}
      >
        <AddProjectButtonModalContainer onClick={(e) => e.stopPropagation()}>
          <AddProjectButtonModalTitle>Add title</AddProjectButtonModalTitle>
          <AddProjectButtonModalContent>
            <AddProjectButtonModalFormGroup action=''>
              <label htmlFor='project-name'>Name</label>
              <input type='text' />
            </AddProjectButtonModalFormGroup>
          </AddProjectButtonModalContent>
        </AddProjectButtonModalContainer>
      </CSSTransition>
    </ModalWrapper>
  );
}
