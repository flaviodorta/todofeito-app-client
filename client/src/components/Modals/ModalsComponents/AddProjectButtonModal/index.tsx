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

interface Props {
  hasBackground?: boolean;
  shouldShowModal: boolean;
  setShouldShowModal: () => void;
}

export function AddProjectButtonModal(props: Props): JSX.Element {
  const { shouldShowModal, setShouldShowModal } = props;
  const [inputNameValue, setInputNameValue] = useState('');
  const [selectColorValue, setSelectColorValue] = useState('');

  const titleRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {shouldShowModal && (
        <Modal
          ref={backgroundRef}
          hasBackground={true}
          setShouldShowModal={setShouldShowModal}
        >
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
