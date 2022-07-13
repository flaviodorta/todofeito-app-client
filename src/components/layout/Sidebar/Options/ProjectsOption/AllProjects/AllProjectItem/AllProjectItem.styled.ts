import styled from 'styled-components';

import {
  AllProjectsItemContentContainerProps,
  AllProjectsItemProps,
} from './AllProjectItem.types';

export const AllProjectsItemContainer = styled.div<AllProjectsItemProps>`
  display: flex;
  align-items: center;
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

export const AllProjectsItemContentContainer = styled.div<AllProjectsItemContentContainerProps>`
  position: absolute;
  transition: all 0.125s ease;
  margin-left: 1.6rem;
  transform: translateY(-50%);
  user-select: none;

  top: ${(props) => (props.isAllProjectsListOpen ? '50%' : '-50%')};
`;
