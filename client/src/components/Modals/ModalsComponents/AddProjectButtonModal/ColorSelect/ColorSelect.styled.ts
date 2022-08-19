import styled from 'styled-components';
import { ContainerProps } from './ColorSelect.types';

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0.5rem 1rem;
  transition: all 0.125s ease;
  border-radius: 3px;
  outline: none;
  background-color: transparent;
  font-size: 1.5rem;
  height: 2.7rem;

  position: relative;

  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
  /* For IE10 */
  &:-ms-expand {
    display: none;
  }

  border: 1px solid ${(props) => props.theme.colors.grey.two};

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.grey.three};
  }

  option {
    margin: 0.4rem 0;
  }
`;
