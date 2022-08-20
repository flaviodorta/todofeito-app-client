import { useEffect, useRef, useState } from 'react';
import { uiActions, useAppDispatch } from '../../../redux/store';

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
import { Modal } from '../../Modals/ModalLayout';

import {
  CalendarIcon,
  InboxSolidIcon as InboxIcon,
  FlagIcon,
  LabelIcon,
} from '../../Icons';
import { useOnKeyPress } from '../../../hooks/useOnKeyPress';

interface Props {}

export const AddTodoModal = (props: Props): JSX.Element => {
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

  const handleCloseModal = () => dispatch(uiActions.setModalShowIs('none'));

  const handleAddTodo = () => {
    if (title) {
      alert('todo added');
      handleCloseModal();
    }
  };

  useOnKeyPress('Enter', handleAddTodo, titleRef);

  useEffect(() => {
    titleRef?.current?.focus();
  }, []);

  return (
    <Modal ref={backgroundRef}>
      <Container>
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
            onClick={handleCloseModal}
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
  );
};
