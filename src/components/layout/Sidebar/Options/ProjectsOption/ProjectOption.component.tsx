import { useRef } from 'react';
import { useHover } from '../../../../../hooks/useHover';

import { Li, Div } from '../Option/Option.styled';
import { HoveredButton, HoveredDiv } from './ProjectOption.styled';

import { ChevronDownIcon as RotatedChevronIcon } from '../../../../shared/icons/ChevronDownIcon';
import { PlusSolidIcon as AddProjectIcon } from '../../../../shared/icons/PlusSolidIcon';

export function ProjectOption(): JSX.Element {
  const projectSectionRef = useRef<HTMLDivElement | null>(null);
  const projectSectionButtonRef = useRef<HTMLDivElement | null>(null);

  const isProjectHover = useHover(projectSectionRef);
  const isProjectButtonHover = useHover(projectSectionButtonRef);

  const icon16px = '1.6rem';

  return (
    <HoveredDiv ref={projectSectionRef}>
      <Li>
        <Div>
          <RotatedChevronIcon />
          Projects
        </Div>

        <HoveredButton
          ref={projectSectionButtonRef}
          isProjectHover={isProjectHover}
          isProjectButtonHover={isProjectButtonHover}
        >
          <AddProjectIcon width={icon16px} height={icon16px} />
        </HoveredButton>
      </Li>
    </HoveredDiv>
  );
}
