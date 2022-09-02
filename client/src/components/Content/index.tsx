import { ActivePage, Todo } from '../../redux/slice/types';

import { AnimatePresence, Reorder } from 'framer-motion';
import { useHover } from '../../hooks/useHover';
import { useRef, useState } from 'react';
import {
  uiActions,
  useAppDispatch,
  useAppSelector,
  userActions,
} from '../../redux/store';

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
import { useEffect } from 'react';

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
  const dispatch = useAppDispatch();

  const { shouldShowSidebar, shouldShowAddTodoItem } = useAppSelector(
    (state) => state.ui
  );
  const { todos } = useAppSelector((state) => state.user);
  const [renderedTodos, setRenderedTodos] = useState(todos);
  useEffect(() => {
    console.log(todos);
  });

  const addSection = useRef<HTMLDivElement>(null);
  const isAddSectionHover = useHover(addSection);

  const toggleAddTodoItem = () => dispatch(uiActions.setShouldShowAddTodoItem());

  const todosList = (
    <AnimatePresence>
      <Reorder.Group axis='y' values={renderedTodos} onReorder={setRenderedTodos}>
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
    </AnimatePresence>
  );

  return (
    <Container
      variants={variants}
      initial={false}
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
            <AddTodoItem toggle={toggleAddTodoItem} />
          ) : (
            <AddTodo onClick={toggleAddTodoItem}>
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
