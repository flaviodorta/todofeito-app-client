import { ActivePage, Todo } from '../../redux/slice/types';

import { useHover } from '../../hooks/useHover';
import { useRef, useState } from 'react';
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

import { Reorder } from 'framer-motion';
import { isTemplateSpan } from 'typescript';

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

  const [todos, setTodos] = useState<Todo[]>([
    {
      todoId: '12312',
      title: 'lavar louça',
      description: 'muita coisa pra lavar',
      toBeCompletedAt: new Date(),
      projectName: 'rotina',
    },
    {
      todoId: '12311',
      title: 'lavar louça',
      description: 'muita coisa pra lavar',
      toBeCompletedAt: new Date(),
      projectName: 'rotina',
    },
    {
      todoId: '1231',
      title: 'lavar louça',
      description: 'muita coisa pra lavar',
      toBeCompletedAt: new Date(),
      projectName: 'rotina',
    },
  ]);

  const todosList = (
    <Reorder.Group axis='y' values={todos} onReorder={setTodos}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.todoId}
          todo={todo}
          todoId={todo.todoId}
          title={todo.title}
          description={todo.description}
          toBeCompletedAt={todo.toBeCompletedAt}
          projectName={todo.projectName}
        />
      ))}
    </Reorder.Group>
  );

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
          <Todos>{todosList}</Todos>
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
