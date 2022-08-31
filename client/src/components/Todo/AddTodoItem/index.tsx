import { useState } from 'react';
import { projectId } from '../../../redux/slice/types';
import { nanoid } from '@reduxjs/toolkit';

import {
  Container,
  Border,
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

import {
  CalendarIcon,
  InboxSolidIcon as InboxIcon,
  FlagIcon,
  LabelIcon,
} from '../../Icons';
import { useAppDispatch, userActions } from '../../../redux/store';

interface Props {
  toggle: () => void;
}

export const AddTodoItem = (props: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [project, setProject] = useState<projectId>('');
  // const [label, setLabel] = useState('');
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);

  const addTodoButtonDisbled = !title;

  const handleAddTodo = () =>
    dispatch(
      userActions.addTodo({
        todoId: nanoid(),
        createdBy: nanoid(),
        createAt: date,
        title,
        description,
      })
    );

  return (
    <Container>
      <Border>
        <Title
          placeholder='Todo name'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Description
          maxLength={100}
          placeholder='Description'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
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
              <LabelIcon onClick={() => setDatePickerIsOpen((s) => !s)} />
            </OptionIconed>

            {/* Priority */}
            <OptionIconed>
              <FlagIcon />
            </OptionIconed>
          </OptionsRight>
        </Options>
      </Border>

      <Buttons>
        <Button
          color={'#777'}
          bg={'transparent'}
          bgHover={'#E5E5E5'}
          bgActive={'#CFCFCF'}
          onClick={props.toggle}
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
  );
};
