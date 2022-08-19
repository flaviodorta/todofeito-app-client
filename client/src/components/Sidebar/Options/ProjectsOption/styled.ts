import styled from 'styled-components';

import { Container as OptionContainer } from '../Option/styled';

export const IconContainer = styled.div<{
  isAllProjectsListOpen: boolean;
}>`
  width: 20px;
  height: 20px;
  transform: ${(props) =>
    props.isAllProjectsListOpen ? 'rotate(0deg)' : 'rotate(-90deg)'};
  transition: all 0.125s ease;
  margin-right: 1rem;

  svg {
    stroke: ${(props) => props.theme.colors.grey.three};
  }
`;

export const Container = styled.div`
  font-weight: 500;
`;

export const OptionContent = styled(OptionContainer)`
  background: none;

  &:hover:not(:last-child) {
    background: none;
  }
`;

export const AddProjectButton = styled.div<{
  isProjectHover: boolean;
  isProjectButtonHover: boolean;
}>`
  position: absolute;
  right: 10px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: transparent;
  width: 3rem;
  height: 3rem;

  &:hover {
    background-color: rgba(200, 200, 200, 0.45);
    transition: all 0.225 ease;
  }

  opacity: ${(props) => (props.isProjectHover ? 1 : 0)};
  fill: ${(props) =>
    props.isProjectButtonHover
      ? props.theme.colors.grey.four
      : props.theme.colors.grey.three};
`;

export const OpenProjectsListLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 99;
  left: 0;
`;
