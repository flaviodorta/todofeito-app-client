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
import { AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../../../../redux/store';

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

export function AddProjectButtonModal(): JSX.Element {
  // const dispatch = useAppDispatch();
  const { shouldShowAddProjectModal } = useAppSelector((state) => state.ui);
  const [inputNameValue, setInputNameValue] = useState('');
  const [selectColorValue, setSelectColorValue] = useState('');

  const titleRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // const handleCloseModal = () => dispatch(uiActions.setShouldShowAddProjectModal);

  return (
    <AnimatePresence>
      {shouldShowAddProjectModal && (
        <Modal ref={backgroundRef} hasBackground={true}>
          <Container
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
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
      )}
    </AnimatePresence>
  );
}
