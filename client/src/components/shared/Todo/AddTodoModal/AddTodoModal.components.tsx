import { useRef, useState } from 'react';
import { projectId } from '../../../../redux/slice/initialState.types';
import styled from 'styled-components';
import { Modal } from '../../../layout/Modals/ModalLayout/Modal.component';

interface Props {}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: ${(props) => props.theme.colors.white.one};
  border-radius: 3px;
  width: 50rem;
  height: 20rem;
  z-index: 100;
`;

export const Title = styled.input`
  border: none;
  outline: none;
  margin-bottom: 1rem;
`;

export const Description = styled.textarea`
  resize: none;
  border: none;
  outline: none;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OptionsLeft = styled.div`
  display: flex;
`;

export const OptionsRight = styled.div`
  display: flex;
`;

export const AddTodoModal = (props: Props): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [project, setProject] = useState<projectId | null>(null);
  const [label, setLabel] = useState('');

  const backgroundRef = useRef<HTMLDivElement>(null);

  return (
    <Modal ref={backgroundRef}>
      <Container>
        <Title placeholder='Todo name' />
        <Description placeholder='Description' />
      </Container>
    </Modal>
  );
};
