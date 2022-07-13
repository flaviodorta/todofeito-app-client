import { useRef, useState } from 'react';
import { useHover } from '../../../../../hooks/useHover';

import { OptionContentContainer, OptionItem } from '../Option/Option.styled';

import {
  AddProjectButton,
  ProjectsOptionContainer,
  RotateChevronIcon,
} from './ProjectOption.styled';

import { PlusSolidIcon as AddProjectIcon } from '../../../../shared/icons/PlusSolidIcon';
import { useToggle } from '../../../../../hooks/useToggle';
import { AllProjectsItem } from './AllProjects/AllProjectItem/AllProjectItem.components';
import { AllProjectsList } from './AllProjects/AllProjectList/AllProjectList.component';

export function ProjectOption(): JSX.Element {
  const [isAllProjectsListOpen, setIsAllProjectsListOpen] = useToggle(false);
  const [projectOptionOpen, setProjectOptionOpen] = useState<string | null>(null);

  const projectOptionRef = useRef<HTMLDivElement | null>(null);
  const AddProjectButtonRef = useRef<HTMLDivElement | null>(null);

  const isProjectOptionHover = useHover(projectOptionRef);
  const isProjectOptionButtonHover = useHover(AddProjectButtonRef);

  const icon16px = '1.6rem';
  return (
    <ProjectsOptionContainer ref={projectOptionRef}>
      <OptionItem onClick={() => setIsAllProjectsListOpen()}>
        <OptionContentContainer>
          <RotateChevronIcon isAllProjectsListOpen={isAllProjectsListOpen} />
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

      <AllProjectsList isAllProjectsListOpen>
        <AllProjectsItem isAllProjectsListOpen={isAllProjectsListOpen}>
          Project 1
        </AllProjectsItem>

        <AllProjectsItem isAllProjectsListOpen={isAllProjectsListOpen}>
          Project 2
        </AllProjectsItem>

        <AllProjectsItem isAllProjectsListOpen={isAllProjectsListOpen}>
          Project 3
        </AllProjectsItem>
      </AllProjectsList>
    </ProjectsOptionContainer>
  );
}
