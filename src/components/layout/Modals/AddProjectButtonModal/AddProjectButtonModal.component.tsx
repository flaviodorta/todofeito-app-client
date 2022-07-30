import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useEventListener } from '../../../../hooks/useEventListener';
import { RootState, todosActions } from '../../../../redux/store';

import { ModalBackground } from '../ModalLayout/ModalBackground/ModalBackground.component';
import { ModalWrapper } from '../ModalLayout/ModalWrapper/ModalWrapper.component';
import {
  Container,
  Content,
  FormGroup,
  FormLabel,
  FormTextInput,
  Title,
} from './AddProjectButtonModal.styled';
import { ColorSelect } from './ColorSelect/ColorSelect.component';

import './ModalBackground.css';

export function AddProjectButtonModal<T>(): JSX.Element {
  const { modal, isSelectOpen, isModalOpen } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch();
  // const [selectRef, setSelectRef] = useState();
  // const [containerRef, setContainerRef] = useState();
  const containerRef = useRef(null);
  const selectRef = useRef(null);

  const [inputNameValue, setInputNameValue] = useState('');
  const [selectColorValue, setSelectColorValue] = useState('');

  // const closeSelect = () => dispatch(todosActions.toggleSelect(false));

  const toggleSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSelectOpen) {
      dispatch(todosActions.toggleSelect(false));
    } else {
      dispatch(todosActions.toggleSelect(true));
    }
  };

  // useEventListener('click', (e) => toggleSelect(e), containerRef);

  return (
    <ModalWrapper>
      <ModalBackground onClick={(e) => toggleSelect(e)} />
      <Container ref={containerRef}>
        <Title>New project</Title>
        <Content>
          <FormGroup>
            <FormLabel htmlFor='project-name'>Name</FormLabel>
            <FormTextInput
              type='text'
              id='project-name'
              onChange={(e) => setInputNameValue(e.target.value)}
              inputNameValue={inputNameValue}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor='project-color'>Color</FormLabel>
            <ColorSelect ref={selectRef} setSelectColorValue={setSelectColorValue} />
          </FormGroup>
        </Content>
      </Container>
    </ModalWrapper>
  );
}
