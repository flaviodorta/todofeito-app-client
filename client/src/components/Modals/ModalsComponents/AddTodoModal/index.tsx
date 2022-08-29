import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../redux/store';

import {
  Container,
  Title,
  Description,
  Options,
  OptionsLeft,
  OptionsRight,
  OptionLabeled,
  OptionIconed,
  Buttons,
  Button,
} from './styled';
import { Modal } from '../../ModalLayout';

import {
  CalendarIcon,
  InboxSolidIcon as InboxIcon,
  FlagIcon,
  LabelIcon,
} from '../../../Icons';
import { useOnKeyPress } from '../../../../hooks/useOnKeyPress';
import { AnimatePresence } from 'framer-motion';

const variants = {
  hidden: {
    scale: 0.6,
    opacity: 0,
    x: '-50%',
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.1,
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: '-50%',
    y: '-50%',
    transition: {
      type: 'tween',
      duration: 0.1,
    },
  },
};

interface Props {
  shouldShowModal: boolean;
  setShouldShowModal: () => void;
}

export const AddTodoModal = (props: Props): JSX.Element => {
  const { setShouldShowModal, shouldShowModal } = props;
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [date, setDate] = useState<Date | null>(null);
  // const [project, setProject] = useState<projectId | null>(null);
  // const [label, setLabel] = useState('');
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);

  const addTodoButtonDisbled = !(title && description);

  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleAddTodo = () => {
    if (title) {
      alert('todo added');
      setShouldShowModal();
    }
  };

  useOnKeyPress('Enter', handleAddTodo, titleRef);

  useEffect(() => {
    titleRef?.current?.focus();
  }, []);

  const style = {
    width: 'fit-content',
    height: 'fit-content',
  };

  return (
    <AnimatePresence>
      {shouldShowModal && (
        <Modal ref={backgroundRef} setShouldShowModal={setShouldShowModal}>
          <Container
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <Title
              ref={titleRef}
              placeholder='Todo name'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Description
              ref={descriptionRef}
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Options>
              <OptionsLeft>
                <OptionLabeled fill={'#222'}>
                  <CalendarIcon height={'12px'} width={'12px'} />
                  Due date
                </OptionLabeled>
                <OptionLabeled fill={'#246FE0'}>
                  <InboxIcon height={'12px'} width={'12px'} />
                  Inbox
                </OptionLabeled>
              </OptionsLeft>

              <OptionsRight>
                {/* Label */}
                <OptionIconed>
                  <LabelIcon
                    height={'16px'}
                    width={'16px'}
                    fill={'#777'}
                    onClick={() => setDatePickerIsOpen((s) => !s)}
                  />
                </OptionIconed>

                {/* Priority */}
                <OptionIconed>
                  <FlagIcon height={'16px'} width={'16px'} fill={'#777'} />
                </OptionIconed>
              </OptionsRight>
            </Options>

            <Buttons>
              <Button
                color={'#777'}
                bg={'transparent'}
                bgHover={'#E5E5E5'}
                bgActive={'#CFCFCF'}
                onClick={setShouldShowModal}
              >
                Cancel
              </Button>
              <Button
                disabled={addTodoButtonDisbled}
                color={'white'}
                bg={'#246FE0'}
                bgHover={'#1d63cd'}
                bgActive={'#174ea1'}
                onClick={handleAddTodo}
              >
                Add todo
              </Button>
            </Buttons>
          </Container>
        </Modal>
      )}
    </AnimatePresence>
  );
};
