import { useEffect, useRef, useState } from 'react';
import { useHover } from '../../../../../hooks/useHover';

import { OptionContentContainer } from '../Option/SidebarOption.styled';

import {
  AddProjectButton,
  OpenProjectsListLayer,
  ProjectOptionItem,
  ProjectsOptionContainer,
  RotateChevronIcon,
} from './SidebarProjectOption.styled';

import { PlusSolidIcon as AddProjectIcon } from '../../../../shared/icons/PlusSolidIcon';
import { useToggle } from '../../../../../hooks/useToggle';
import { AllProjectsItem } from './AllProjects/AllProjectItem/AllProjectItem.components';
import { AllProjectsList } from './AllProjects/AllProjectList/AllProjectList.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, todosActions } from '../../../../../store/store';
import { ADD_PROJECT_BUTTON_MODAL } from '../../../../../constants/constants';

export function SidebarProjectOption(): JSX.Element {
  const [isAllProjectsListOpen, setIsAllProjectsListOpen] = useToggle(false);
  const [projectOptionOpen, setProjectOptionOpen] = useState<string | null>(null);

  const projectOptionRef = useRef<HTMLDivElement | null>(null);
  const AddProjectButtonRef = useRef<HTMLDivElement | null>(null);

  const isProjectOptionHover = useHover(projectOptionRef);
  const isProjectOptionButtonHover = useHover(AddProjectButtonRef);

  const dispatch = useDispatch();

  const toggleAddProjectModal = () => {
    dispatch(todosActions.showModal(ADD_PROJECT_BUTTON_MODAL));
  };

  const { modal } = useSelector((state: RootState) => state);

  useEffect(() => {
    console.log(modal);
  }, [modal]);

  const icon16px = '1.6rem';
  return (
    <ProjectsOptionContainer ref={projectOptionRef}>
      <ProjectOptionItem>
        <OpenProjectsListLayer onClick={() => setIsAllProjectsListOpen()} />

        <OptionContentContainer>
          <RotateChevronIcon isAllProjectsListOpen={isAllProjectsListOpen} />
          Projects
        </OptionContentContainer>

        <AddProjectButton
          ref={AddProjectButtonRef}
          isProjectHover={isProjectOptionHover}
          isProjectButtonHover={isProjectOptionButtonHover}
          onClick={toggleAddProjectModal}
        >
          <AddProjectIcon width={icon16px} height={icon16px} />
        </AddProjectButton>
      </ProjectOptionItem>

      <AllProjectsList isAllProjectsListOpen={isAllProjectsListOpen}>
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
