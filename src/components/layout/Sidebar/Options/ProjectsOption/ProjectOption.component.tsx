import React, { useRef, useState } from 'react';
import { useHover } from '../../../../../hooks/useHover';

import { OptionContentContainer, OptionItem } from '../Option/Option.styled';
import {
  AllProjectsItemContentContainer,
  AllProjectsItemContainer,
} from './ProjectOption.styled';

import {
  AllProjectsList,
  AddProjectButton,
  ProjectsOptionContainer,
  RotateChevronIcon,
} from './ProjectOption.styled';

import { PlusSolidIcon as AddProjectIcon } from '../../../../shared/icons/PlusSolidIcon';
import { CircleSolidIcon as CircleIcon } from '../../../../shared/icons/CircleSolid';
import { useToggle } from '../../../../../hooks/useToggle';

export function ProjectOption(): JSX.Element {
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useToggle(false);
  const [projectOptionOpen, setProjectOptionOpen] = useState<string | null>(null);

  const projectOptionRef = useRef<HTMLDivElement | null>(null);
  const AddProjectButtonRef = useRef<HTMLDivElement | null>(null);

  const isProjectOptionHover = useHover(projectOptionRef);
  const isProjectOptionButtonHover = useHover(AddProjectButtonRef);

  const icon16px = '1.6rem';
  console.log(isAllProjectsOpen);
  return (
    <ProjectsOptionContainer ref={projectOptionRef}>
      <OptionItem onClick={() => setIsAllProjectsOpen()}>
        <OptionContentContainer>
          <RotateChevronIcon isOpen={isAllProjectsOpen} />
          Projects
        </OptionContentContainer>

        <AddProjectButton
          ref={AddProjectButtonRef}
          isProjectHover={isProjectOptionHover}
          isProjectButtonHover={isProjectOptionButtonHover}
        >
          <AddProjectIcon width={icon16px} height={icon16px} />
        </AddProjectButton>
      </OptionItem>

      <AllProjectsList isOpen={isAllProjectsOpen}>
        <AllProjectsItem
          isOpen={isAllProjectsOpen}
          onClick={() => console.log('cu')}
        >
          Project 1
        </AllProjectsItem>
      </AllProjectsList>
    </ProjectsOptionContainer>
  );
}

function AllProjectsItem({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
}): JSX.Element {
  return (
    <AllProjectsItemContainer isOpen={isOpen}>
      <AllProjectsItemContentContainer isOpen={isOpen}>
        <CircleIcon height={'10px'} width={'10px'} />
        {children}
      </AllProjectsItemContentContainer>
    </AllProjectsItemContainer>
  );
}
