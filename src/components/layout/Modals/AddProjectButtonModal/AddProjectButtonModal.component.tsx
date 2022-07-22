import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { RootState } from '../../../../store/store';

import { ModalBackground } from '../ModalLayout/ModalBackground/ModalBackground.component';
import { ModalWrapper } from '../ModalLayout/ModalWrapper/ModalWrapper.component';
import {
  AddProjectButtonModalContainer,
  AddProjectButtonModalContent,
  AddProjectButtonModalFormGroup,
  AddProjectButtonModalFormLabel,
  AddProjectButtonModalFormTextInput,
  AddProjectButtonModalTitle,
} from './AddProjectButtonModal.styled';
import { AddProjectButtonModalColorSelect } from './AddProjectButtonModalColorSelect/AddProjectButtonModalColorSelect.component';

import './ModalBackground.css';

export function AddProjectButtonModal(): JSX.Element {
  const { modal } = useSelector((state: RootState) => state);
  const isModalOpen = modal !== null;

  const [inputNameValue, setInputNameValue] = useState('');
  const [selectColorValue, setSelectColorValue] = useState('');

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
            <AddProjectButtonModalFormGroup>
              <AddProjectButtonModalFormLabel htmlFor='project-name'>
                Name
              </AddProjectButtonModalFormLabel>
              <AddProjectButtonModalFormTextInput
                type='text'
                id='project-name'
                onChange={(e) => setInputNameValue(e.target.value)}
                inputNameValue={inputNameValue}
              />
            </AddProjectButtonModalFormGroup>

            <AddProjectButtonModalFormGroup>
              <AddProjectButtonModalFormLabel htmlFor='project-color'>
                Color
              </AddProjectButtonModalFormLabel>
              <AddProjectButtonModalColorSelect
                setSelectColorValue={setSelectColorValue}
              />
            </AddProjectButtonModalFormGroup>
          </AddProjectButtonModalContent>
        </AddProjectButtonModalContainer>
      </CSSTransition>
    </ModalWrapper>
  );
}
