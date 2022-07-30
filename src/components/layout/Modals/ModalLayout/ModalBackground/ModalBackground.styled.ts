import styled from 'styled-components';

export interface ModalBackgroundProps {
  ref: React.ForwardedRef<unknown>;
}

export const ModalBackgroundContainer = styled.div<ModalBackgroundProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 99;
`;
