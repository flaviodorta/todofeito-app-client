import styled from 'styled-components';

import {
  AddProjectButtonProps,
  RotateChevronIconProps,
} from './SidebarProjectOptions.types';
import { ChevronDownIcon } from '../../../../shared/icons/ChevronDownIcon';

export const RotateChevronIcon = styled(ChevronDownIcon)<RotateChevronIconProps>`
  transform: ${(props) =>
    props.isAllProjectsListOpen ? 'rotate(0deg)' : 'rotate(-90deg)'};
  transition: all 0.125s ease;
`;

export const ProjectsOptionContainer = styled.div`
  font-weight: 500;
`;

export const AddProjectButton = styled.div<AddProjectButtonProps>`
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
