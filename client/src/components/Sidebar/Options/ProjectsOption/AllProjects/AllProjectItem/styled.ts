import styled from 'styled-components';

export const Container = styled.div<{
  isAllProjectsListOpen: boolean;
}>`
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

  visibility: ${(props) => (props.isAllProjectsListOpen ? 'visible' : 'hidden')};

  &:hover {
    background-color: ${(props) => props.theme.colors.white.three};
  }

  svg {
    margin-right: 18px;
    fill: ${(props) => props.theme.colors.grey.three};
  }
`;

export const Content = styled.div<{
  isAllProjectsListOpen: boolean;
}>`
  position: absolute;
  transition: all 0.125s ease;
  margin-left: 1.6rem;
  transform: translateY(-50%);
  user-select: none;

  top: ${(props) => (props.isAllProjectsListOpen ? '50%' : '-50%')};
`;
