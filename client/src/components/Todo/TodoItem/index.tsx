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

import {
  PenSolidIcon as PenIcon,
  CalendarIcon,
  MessageRegularIcon as MessageIcon,
  MoreThreeDotsIcon as ThreeDotsIcon,
} from '../../Icons';
import { Reorder, useDragControls, useMotionValue } from 'framer-motion';
import { useRaisedShadow } from '../../../hooks/useRaisedShadow';
import { Todo } from '../../../redux/slice/types';

interface Props {
  todo: Todo;
  todoId?: string;
  title: string;
  description: string;
  toBeCompletedAt?: Date;
  projectName?: string;
}
export const TodoItem = (props: Props): JSX.Element => {
  const { todoId, title, description, toBeCompletedAt, projectName } = props;
  const [shouldShowDragIcon, setShouldShowDragIcon] = useToggle(false);
  const [shouldShowOptions, setShouldShowOptions] = useToggle(false);
  const [isChecked, setIsChecked] = useToggle(false);

  const toggleHiddenElements = () => {
    setShouldShowDragIcon();
    setShouldShowOptions();
  };

  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

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
      >
        <Container>
          {shouldShowDragIcon && (
            <IconContainer>
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
              {description.substring(0, 30)}
              {description.length > 30 ? '...' : ''}
            </Description>
            <FlexRow>
              <Date>{toBeCompletedAt ? toBeCompletedAt.toDateString() : ''}</Date>
              <Project>{projectName}</Project>
            </FlexRow>
          </Flex>
          {shouldShowOptions && (
            <Options>
              <OptionIconed>
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
