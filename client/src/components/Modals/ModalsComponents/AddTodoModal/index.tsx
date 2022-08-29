import { useEffect, useRef, useState } from 'react';
import { uiActions, useAppDispatch, useAppSelector } from '../../../../redux/store';
import { useOnKeyPress } from '../../../../hooks/useOnKeyPress';

import { AnimatePresence } from 'framer-motion';
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

const variants = {
  hidden: {
    scale: 0.6,
    opacity: 0,
    x: '-50%',
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.125,
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: '-50%',
    y: '-50%',
    transition: {
      type: 'tween',
      duration: 0.125,
    },
  },
};

export const AddTodoModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { shouldShowAddTodoItemModal } = useAppSelector((state) => state.ui);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [date, setDate] = useState<Date | null>(null);
  // const [project, setProject] = useState<projectId | null>(null);
  // const [label, setLabel] = useState('');
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);

  const addTodoButtonDisabled = !title;

  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const toggleAddTodoItemModal = () =>
    dispatch(uiActions.setShouldShowAddTodoItemModal());

  const handlePostAddTodo = () => {
    if (title) {
      alert('todo added');
      toggleAddTodoItemModal();
    }
  };

  useOnKeyPress('Enter', handlePostAddTodo, titleRef);

  useEffect(() => {
    titleRef?.current?.focus();
  }, []);

  return (
    <AnimatePresence>
      {shouldShowAddTodoItemModal && (
        <Modal ref={backgroundRef}>
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
                onClick={toggleAddTodoItemModal}
              >
                Cancel
              </Button>
              <Button
                disabled={addTodoButtonDisabled}
                color={'white'}
                bg={'#246FE0'}
                bgHover={'#1d63cd'}
                bgActive={'#174ea1'}
                onClick={handlePostAddTodo}
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
