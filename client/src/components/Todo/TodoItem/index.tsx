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

interface Props {
  title: string;
  description: string;
  date: Date;
  project: string;
}
export const TodoItem = (props: Props): JSX.Element => {
  const { title, description, date, project } = props;
  const [shouldShowDragIcon, setShouldShowDragIcon] = useToggle(false);
  const [shouldShowOptions, setShouldShowOptions] = useToggle(false);
  const [isChecked, setIsChecked] = useToggle(false);

  const toggleHiddenElements = () => {
    setShouldShowDragIcon();
    setShouldShowOptions();
  };

  return (
    <Wrapper onMouseEnter={toggleHiddenElements} onMouseLeave={toggleHiddenElements}>
      <Container>
        {shouldShowDragIcon && (
          <IconContainer>
            <GripIcon />
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
            <Date>12 aug</Date>
            <Project>{project}</Project>
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
  );
};
