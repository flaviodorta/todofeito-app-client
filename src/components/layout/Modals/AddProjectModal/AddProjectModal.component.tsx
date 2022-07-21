import { ModalWrapper } from '../ModalWrapper/ModalWrapper.component';
import { AddProjectModalContainer } from './AddProjectModal.styled';

export function AddProjectModal(): JSX.Element {
  return (
    <ModalWrapper>
      <AddProjectModalContainer onClick={(e) => e.stopPropagation()} />
    </ModalWrapper>
  );
}
