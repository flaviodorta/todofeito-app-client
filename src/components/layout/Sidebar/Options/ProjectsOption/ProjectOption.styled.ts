import styled from 'styled-components';

import {
  AllProjectsProps,
  AddProjectButtonProps,
  RotateChevronIconProps,
  ProjectProps,
} from './ProjectOptions.types';
import { ChevronDownIcon } from '../../../../shared/icons/ChevronDownIcon';

export const RotateChevronIcon = styled(ChevronDownIcon)<RotateChevronIconProps>`
  transform: ${(props) => (props.isOpen ? 'rotate(0deg)' : 'rotate(-90deg)')};
  transition: all 0.125s ease;
`;

export const ProjectsOptionContainer = styled.div`
  font-weight: 500;
`;

export const AddProjectButton = styled.div<AddProjectButtonProps>`
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

export const AllProjectsList = styled.ul<AllProjectsProps>`
  width: 100%;
  height: ${(props) => (props.isOpen ? '30rem' : 0)};

  transition: height 0.3 ease;
`;

export const AllProjectsItemContainer = styled.div<ProjectProps>`
  display: flex;
  align-items: center;
  /* padding: 1.6rem 1.6rem; */
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  position: relative;
  overflow: hidden;
  height: 3.2rem;
  width: 100%;

  transition: all 0.125s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.white.three};
  }

  svg {
    margin-right: 18px;
    fill: ${(props) => props.theme.colors.grey.three};
  }
`;

export const AllProjectsItemContentContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  transition: all 0.125s ease;
  margin-left: 1.6rem;
  /* top: 50%; */
  transform: translateY(-50%);
  user-select: none;

  top: ${(props) => (props.isOpen ? '50%' : '-50%')};
`;
