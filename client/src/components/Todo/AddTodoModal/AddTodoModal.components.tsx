import { useEffect, useRef, useState } from 'react';
import { globalActions, useAppDispatch } from '../../../redux/store';

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
} from './AddTodoModal.styled';
import { Modal } from '../../Modals/ModalLayout/Modal.component';

import { CalendarIcon } from '../../Icons/CalendarIcon';
import { InboxSolidIcon as InboxIcon } from '../../Icons/InboxSolidIcon';
import { FlagIcon } from '../../Icons/FlagIcon';
import { LabelIcon } from '../../Icons/LabelIcon';

interface Props {}

export const AddTodoModal = (props: Props): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [date, setDate] = useState<Date | null>(null);
  // const [project, setProject] = useState<projectId | null>(null);
  // const [label, setLabel] = useState('');

  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);

  const addTodoButtonDisbled = !(title && description);

  const backgroundRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const descriptionTextarea = descriptionRef.current;

  const dispatch = useAppDispatch();

  const handleCloseModal = () => dispatch(globalActions.setModal(''));

  useEffect(() => {
    descriptionTextarea?.addEventListener('keyup', (e) => {
      let scrollHeight = (e.target as HTMLTextAreaElement).scrollHeight;
      descriptionTextarea.style.height = `${scrollHeight}px`;
    });

    return () => {
      descriptionTextarea?.removeEventListener('keyup', (e) => {
        let scrollHeight = (e.target as HTMLTextAreaElement).scrollHeight;
        descriptionTextarea.style.height = `${scrollHeight}px`;
      });
    };
  }, []);

  return (
    <Modal ref={backgroundRef}>
      <Container>
        <Title
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
          >
            Add todo
          </Button>
        </Buttons>
      </Container>
    </Modal>
  );
};
