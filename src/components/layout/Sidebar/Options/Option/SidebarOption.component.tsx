import { OptionItem, OptionContentContainer, TodoCount } from './SidebarOption.styled';

import { OptionProps } from './SidebarOption.types';

export function SidebarOption(props: OptionProps): JSX.Element {
  return (
    <OptionItem>
      <OptionContentContainer>{props.children}</OptionContentContainer>
      <TodoCount>{props.todoCount}</TodoCount>
    </OptionItem>
  );
}
