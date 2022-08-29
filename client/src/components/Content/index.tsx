import { ActivePage } from '../../redux/slice/types';

import { useHover } from '../../hooks/useHover';
import { useRef } from 'react';
import { uiActions, useAppDispatch, useAppSelector } from '../../redux/store';

import {
  Container,
  Flex,
  Heading,
  Title,
  Options,
  Option,
  Todos,
  AddTodo,
  AddSection,
} from './styled';
import { AddTodoItem } from '../Todo/AddTodoItem';
import { TodoItem } from '../Todo/TodoItem';

import {
  EllipsisSolidIcon as EllipsisIcon,
  SlidersSolidIcon as SlidersIcon,
  MessageRegularIcon as MessageIcon,
  PlusSolidIcon as PlusIcon,
} from '../../components/Icons';
import styled from 'styled-components';

interface Props {
  activePage: ActivePage;
}

const variants = {
  hidden: {
    x: '-2.5rem',
    transition: {
      type: 'spring',
      easy: 'easeOut',
      duration: 0.025,
    },
  },
  visible: {
    x: '2.5rem',
    transition: {
      type: 'spring',
      easy: 'easeOut',
      duration: 0.025,
    },
  },
};

export function Content(props: Props): JSX.Element {
  const { activePage } = props;
  const { shouldShowAddTodoItem, shouldShowSidebar } = useAppSelector(
    (state) => state.ui
  );
  const dispatch = useAppDispatch();

  const addSection = useRef<HTMLDivElement>(null);
  const isAddSectionHover = useHover(addSection);

  const handleOpenAddTodoItem = () => dispatch(uiActions.setShouldShowAddTodoItem());
  console.log(shouldShowSidebar);
  return (
    <Container
      variants={variants}
      initial={shouldShowSidebar ? 'visible' : 'hidden'}
      animate={shouldShowSidebar ? 'visible' : 'hidden'}
    >
      {activePage === 'inbox' && (
        <Flex>
          <Heading>
            <Title>Inbox</Title>
            <Options>
              <Option>
                <MessageIcon width={'15px'} height={'15px'} />
                Comments
              </Option>
              <Option>
                <SlidersIcon width={'15px'} height={'15px'} />
                View
              </Option>
              <Option>
                <EllipsisIcon width={'20px'} height={'20px'} />
              </Option>
            </Options>
          </Heading>
          <Todos>
            <TodoItem
              title={'jacqueline filha da puta'}
              description={'vagabunda do caralho piranha filha da puta'}
              date={new Date()}
            />
            <TodoItem title={'porra'} description={'caralho'} date={new Date()} />
            <TodoItem title={'porra'} description={'caralho'} date={new Date()} />
          </Todos>
          {shouldShowAddTodoItem ? (
            <AddTodoItem />
          ) : (
            <AddTodo onClick={handleOpenAddTodoItem}>
              <div className='icon-bg'>
                <PlusIcon />
              </div>
              Add todo
            </AddTodo>
          )}

          <AddSection ref={addSection} isAddSectionHover={isAddSectionHover}>
            <p>Add section</p>
            <span></span>
          </AddSection>
        </Flex>
      )}
    </Container>
  );
}
