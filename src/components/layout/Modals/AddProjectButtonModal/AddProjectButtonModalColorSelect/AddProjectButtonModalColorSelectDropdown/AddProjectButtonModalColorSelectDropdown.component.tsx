import {
  AddProjectButtonModalColorSelectDropdownContainer,
  AddProjectButtonModalColorSelectDropdownContainerWrapper,
} from './AddProjectButtonModalColorSelectDropdown.styled';
import { AddProjectButtonModalColorSelectDropdownProps } from './AddProjectButtonModalColorSelectDropdown.types';

export function AddProjectButtonModalColorSelectDropdown(
  props: AddProjectButtonModalColorSelectDropdownProps
): JSX.Element {
  const { children } = props;

  return (
    <AddProjectButtonModalColorSelectDropdownContainerWrapper>
      <AddProjectButtonModalColorSelectDropdownContainer>
        {children}
      </AddProjectButtonModalColorSelectDropdownContainer>
    </AddProjectButtonModalColorSelectDropdownContainerWrapper>
  );
}
