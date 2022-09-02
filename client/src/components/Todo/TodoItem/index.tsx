import { Todo } from '../../../redux/slice/types';
import { Reorder, useDragControls, useMotionValue, Variants } from 'framer-motion';
import { useRaisedShadow } from '../../../hooks/useRaisedShadow';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, userActions } from '../../../redux/store';
import { useToggle } from '../../../hooks/useToggle';

import { Checkbox } from './Checkbox';
import {
  Container,
  GripIcon,
  Date,
  Description,
  Flex,
  FlexRow,
  Options,
  Project,
  Title,
  Wrapper,
  IconContainer,
  OptionIconed,
} from './styled';
import { AddTodoItem } from '../AddTodoItem';

import {
  PenSolidIcon as PenIcon,
  CalendarIcon,
  MessageRegularIcon as MessageIcon,
  MoreThreeDotsIcon as ThreeDotsIcon,
} from '../../Icons';

type Props = Todo & { todo: Todo };

const iconContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

const wrapperVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.125,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const TodoItem = (props: Props): JSX.Element => {
  const { todoId, title, description, toBeCompletedAt, projectName } = props;
  const dispatch = useAppDispatch();

  const [shouldShowDragIcon, setShouldShowDragIcon] = useToggle(false);
  const [shouldShowOptions, setShouldShowOptions] = useToggle(false);
  const [isChecked, setIsChecked] = useToggle(false);
  const [isEditing, setIsEditing] = useToggle(false);

  const toggleHiddenElements = () => {
    setShouldShowDragIcon();
    setShouldShowOptions();
  };

  const { todos } = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log(isChecked);
    console.log(todoId);
    console.log(todos);
    if (isChecked) {
      setTimeout(() => dispatch(userActions.deleteTodo(todoId)), 400);
    }
  }, [isChecked, dispatch, todoId]);

  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  if (isEditing) {
    return (
      <Reorder.Item
        value={props.todo}
        id={props.todoId}
        style={{ boxShadow, y }}
        dragListener={false}
        dragControls={dragControls}
      >
        <AddTodoItem toggle={setIsEditing} />
      </Reorder.Item>
    );
  }

  return (
    <Reorder.Item
      value={props.todo}
      id={props.todoId}
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={dragControls}
    >
      <Wrapper
        onMouseEnter={toggleHiddenElements}
        onMouseLeave={toggleHiddenElements}
        variants={wrapperVariants}
        initial='hidden'
        animate='visible'
      >
        <Container>
          {shouldShowDragIcon && (
            <IconContainer variants={iconContainerVariants} whileTap='hidden'>
              <GripIcon
                onPointerDown={(e: React.PointerEvent<SVGSVGElement>) =>
                  dragControls.start(e)
                }
              />
            </IconContainer>
          )}

          <Checkbox isChecked={setIsChecked} />

          <Flex>
            <Title>{title}</Title>
            <Description>
              {description ? description.substring(0, 30) : ''}
              {description ? (description.length > 30 ? '...' : '') : ''}
            </Description>
            <FlexRow>
              <Date>{toBeCompletedAt ? toBeCompletedAt.toDateString() : ''}</Date>
              <Project>{projectName}</Project>
            </FlexRow>
          </Flex>

          {shouldShowOptions && (
            <Options>
              <OptionIconed onClick={setIsEditing}>
                <PenIcon />
              </OptionIconed>
              <OptionIconed>
                <CalendarIcon />
              </OptionIconed>
              <OptionIconed>
                <MessageIcon />
              </OptionIconed>
              <OptionIconed>
                <ThreeDotsIcon />
              </OptionIconed>
            </Options>
          )}
        </Container>
      </Wrapper>
    </Reorder.Item>
  );
};
