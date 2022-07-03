import styled from 'styled-components';
import { DivProps } from './Label.types';

export const Div = styled.div<DivProps>`
  background-color: ${(props) => props.theme.colors.grey.three};
  border: none;
  border-radius: 4px;
  padding: 0.65rem 0.85rem;
  position: absolute;
  z-index: 10;
  box-shadow: ${(props) => props.theme.boxShadow};
  white-space: nowrap;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  user-select: none;

  bottom: -3.2rem;
  left: ${(props) =>
    `${(props.parentWidth ?? 0) / 2 - (props.elementWidth ?? 0) / 2}px`};
`;
