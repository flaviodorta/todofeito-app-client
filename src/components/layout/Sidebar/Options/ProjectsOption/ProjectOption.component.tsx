import React, { useRef, useState } from 'react';
import { useHover } from '../../../../../hooks/useHover';

import { Content as OptionTitle } from '../Option/Option.styled';

import {
  Container,
  AddProjectButton,
  OptionContent,
  OpenProjectsListLayer,
  RotateChevronIcon,
} from './ProjectOption.styled';

import { PlusSolidIcon as AddProjectIcon } from '../../../../shared/icons/PlusSolidIcon';
import { useToggle } from '../../../../../hooks/useToggle';
import { AllProjectsItem } from './AllProjects/AllProjectItem/AllProjectItem.components';
import { AllProjectsList } from './AllProjects/AllProjectList/AllProjectList.component';
import { useDispatch } from 'react-redux';
import { todosActions } from '../../../../../redux/store';
import { ADD_PROJECT_BUTTON_MODAL } from '../../../../../constants/constants';

export function ProjectOption(): JSX.Element {
  const [isAllProjectsListOpen, setIsAllProjectsListOpen] = useToggle(false);
  const [projectOptionOpen, setProjectOptionOpen] = useState<string | null>(null);

  const projectOptionRef = useRef<HTMLDivElement | null>(null);
  const AddProjectButtonRef = useRef<HTMLDivElement | null>(null);

  const isProjectOptionHover = useHover(projectOptionRef);
  const isProjectOptionButtonHover = useHover(AddProjectButtonRef);

  const dispatch = useDispatch();

  const toggleAddProjectModal = () => {
    dispatch(todosActions.setModal(ADD_PROJECT_BUTTON_MODAL));
    dispatch(todosActions.toggleModal(true));
  };

  const icon16px = '1.6rem';
  return (
    <Container ref={projectOptionRef}>
      <OptionContent>
        <OpenProjectsListLayer onClick={() => setIsAllProjectsListOpen()} />

        <OptionTitle>
          <RotateChevronIcon isAllProjectsListOpen={isAllProjectsListOpen} />
          Projects
        </OptionTitle>

        <AddProjectButton
          ref={AddProjectButtonRef}
          isProjectHover={isProjectOptionHover}
          isProjectButtonHover={isProjectOptionButtonHover}
          onClick={toggleAddProjectModal}
        >
          <AddProjectIcon width={icon16px} height={icon16px} />
        </AddProjectButton>
      </OptionContent>

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
    </Container>
  );
}
