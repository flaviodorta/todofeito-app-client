import { Li, Div, TodoCount } from './Option.styled';

import { OptionProps } from './Option.types';

export function Option(props: OptionProps): JSX.Element {
  return (
    <Li>
      <Div>{props.children}</Div>
      <TodoCount>{props.todoCount}</TodoCount>
    </Li>
  );
}
