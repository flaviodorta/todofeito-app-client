import { AddProjectButtonModalColorSelectOptionContainer } from './AddProjectButtonModalColorSelectOption.styled';

import { AddProjectButtonModalColorSelectOptionProps } from './AddProjectButtonModalColorSelectOption.types';

export function AddProjectButtonModalColorSelectOption(
  props: AddProjectButtonModalColorSelectOptionProps
): JSX.Element {
  const { children, icon } = props;

  return (
    <AddProjectButtonModalColorSelectOptionContainer>
      {icon ?? icon}
      {children}
    </AddProjectButtonModalColorSelectOptionContainer>
  );
}
