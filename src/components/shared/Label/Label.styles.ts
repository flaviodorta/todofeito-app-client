import styled from 'styled-components';
import { DivProps } from './Label.types';

export const Div = styled.div`
  background-color: ${(props) => props.theme.colors.grey.one};
  border: none;
  border-radius: 4px;
  padding: 0.65rem 0.85rem;
  position: absolute;
  z-index: 3;
  box-shadow: ${(props) => props.theme.boxShadow};

  bottom: -4.4rem;
  left: -50%;
`;
