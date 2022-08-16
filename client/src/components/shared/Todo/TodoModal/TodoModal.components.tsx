import { useState } from 'react';
import { projectId } from '../../../../redux/slice/initialState.types';
import styled from 'styled-components';

interface Props {}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  padding: 30px;
`;

export const Title = styled.input`
  border: none;
  outline: none;
`;

export const Description = styled.textarea`
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

export const TodoModal = (props: Props): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [project, setProject] = useState<projectId | null>(null);
  const [label, setLabel] = useState('');

  return (
    <Container>
      <Title placeholder='Todo name' />
      <Description placeholder='Description' />
    </Container>
  );
};
