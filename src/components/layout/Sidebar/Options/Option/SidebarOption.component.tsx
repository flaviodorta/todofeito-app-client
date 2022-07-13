import { OptionItem, OptionContentContainer, TodoCount } from './Option.styled';

import { OptionProps } from './Option.types';

export function SidebarOption(props: OptionProps): JSX.Element {
  return (
    <OptionItem>
      <OptionContentContainer>{props.children}</OptionContentContainer>
      <TodoCount>{props.todoCount}</TodoCount>
    </OptionItem>
  );
}
