import styled from 'styled-components';

export const OptionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  margin-bottom: 0;

  &:hover:not(:last-child) {
    background-color: ${(props) => props.theme.colors.white.three};
  }
`;

export const OptionContentContainer = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  letter-spacing: 0.5px;
  user-select: none;

  svg {
    margin-right: 1.3rem;
  }
`;

export const TodoCount = styled.span`
  color: ${(props) => props.theme.colors.grey.three};
  font-size: 1.4rem;
  justify-self: flex-end;
  user-select: none;
`;
