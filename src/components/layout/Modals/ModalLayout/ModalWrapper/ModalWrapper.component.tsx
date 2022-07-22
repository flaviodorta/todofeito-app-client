import { ModalWrapperContainer } from './ModalWrapper.styled';
import { ModalWrapperProps } from './ModalWrapper.types';

export function ModalWrapper(props: ModalWrapperProps): JSX.Element {
  const { children } = props;

  return <ModalWrapperContainer>{children}</ModalWrapperContainer>;
}
