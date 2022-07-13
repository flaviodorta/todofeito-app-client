import { AllProjectsItemProps } from './AllProjectItem.types';

import {
  AllProjectsItemContainer,
  AllProjectsItemContentContainer,
} from './AllProjectItem.styled';

import { CircleSolidIcon as CircleIcon } from '../../../../../../shared/icons/CircleSolid';

export function AllProjectsItem(props: AllProjectsItemProps): JSX.Element {
  const { isAllProjectsListOpen, children } = props;

  const icon10px = '10px';

  return (
    <AllProjectsItemContainer isAllProjectsListOpen={isAllProjectsListOpen}>
      <AllProjectsItemContentContainer isAllProjectsListOpen={isAllProjectsListOpen}>
        <CircleIcon height={icon10px} width={icon10px} />
        {children}
      </AllProjectsItemContentContainer>
    </AllProjectsItemContainer>
  );
}
