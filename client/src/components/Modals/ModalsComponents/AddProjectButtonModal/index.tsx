import { useRef, useState } from 'react';

import { Modal } from '../../ModalLayout';
import {
  Container,
  Title,
  Content,
  FormGroup,
  FormLabel,
  FormTextInput,
} from './styled';
import { ColorSelect } from './ColorSelect';

export function AddProjectButtonModal(): JSX.Element {
  const [inputNameValue, setInputNameValue] = useState('');
  const [selectColorValue, setSelectColorValue] = useState('');

  const titleRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  return (
    <Modal ref={backgroundRef}>
      <Container>
        <Title ref={titleRef}>New project</Title>
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
            <ColorSelect
              setSelectColorValue={setSelectColorValue}
              backgroundRef={backgroundRef}
            />
          </FormGroup>
        </Content>
      </Container>
    </Modal>
  );
}
