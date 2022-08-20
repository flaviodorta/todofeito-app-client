import React, { useEffect, useRef, useState } from 'react';
import { uiActions, useAppDispatch } from '../../../redux/store';

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

import { expandTextarea } from '../../../utils/helpers';

interface Props {}

export const AddTodoItem = (props: Props): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [date, setDate] = useState<Date | null>(null);
  // const [project, setProject] = useState<projectId | null>(null);
  // const [label, setLabel] = useState('');

  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);

  const addTodoButtonDisbled = !(title && description);

  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const dispatch = useAppDispatch();

  const handleCloseModal = () => dispatch(uiActions.setModal(''));

  return (
    <Container>
      <Border>
        <Title
          placeholder='Todo name'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Description
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
      </Border>

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
        >
          Add todo
        </Button>
      </Buttons>
    </Container>
  );
};
