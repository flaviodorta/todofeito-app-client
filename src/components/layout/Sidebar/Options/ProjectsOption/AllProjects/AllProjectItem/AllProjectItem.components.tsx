import { AllProjectsItemProps } from './AllProjectItem.types';

import {
  AllProjectsItemContainer,
  AllProjectsItemContentContainer,
} from './AllProjectItem.styled';

import { CircleSolidIcon as CircleIcon } from '../../../../../../shared/icons/CircleSolid';

export function AllProjectsItem(props: AllProjectsItemProps): JSX.Element {
  const { isAllProjectsListOpen, children } = props;

  return (
    <AllProjectsItemContainer isAllProjectsListOpen={isAllProjectsListOpen}>
      <AllProjectsItemContentContainer isAllProjectsListOpen={isAllProjectsListOpen}>
        <CircleIcon height={'10px'} width={'10px'} />
        {children}
      </AllProjectsItemContentContainer>
    </AllProjectsItemContainer>
  );
}
