import { useHover } from '../../hooks/useHover';
import { useRef } from 'react';
import { uiActions, useAppDispatch, useAppSelector } from '../../redux/store';

import { AddTodoItem } from '../Todo/AddTodoItem';

import {
  EllipsisSolidIcon as EllipsisIcon,
  SlidersSolidIcon as SlidersIcon,
  MessageRegularIcon as MessageIcon,
  PlusSolidIcon as PlusIcon,
} from '../../components/Icons';

import { ActivePage } from '../../redux/slice/types';

import styled from 'styled-components';
import { TodoItem } from '../Todo/TodoItem';

export const Container = styled.div`
  z-index: 120;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75rem;
  height: max-content;
`;

export const Title = styled.h3`
  font-size: 2.2rem;
`;

export const Options = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
`;

export const Option = styled.div`
  width: max-content;
  display: flex;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.grey.three};
  gap: 6px;
  border-radius: 3.5px;
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.colors.grey.three};
  }

  &:hover {
    background-color: rgba(200, 200, 200, 0.45);
    transition: all 0.225 ease;
  }
`;

export const Todos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Flex = styled.div<{ shouldShowSidebar: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  margin-left: ${(props) => (props.shouldShowSidebar ? '10rem' : '0rem')};
  transition: margin-left 0.145s ease;
`;

export const AddTodo = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 200;
  padding: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;

  color: ${(props) => props.theme.colors.grey.three};

  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: ${(props) => props.theme.colors.blue};
  }

  .icon-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    margin-bottom: 0.2rem;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    color: ${(props) => props.theme.colors.white.one};
  }

  &:hover {
    color: ${(props) => props.theme.colors.blue};

    .icon-bg {
      background-color: ${(props) => props.theme.colors.blue};
    }

    svg {
      fill: white;
    }
  }
`;

export const AddSection = styled.div<{ isAddSectionHover: boolean }>`
  position: relative;
  padding: 2rem 0;
  transition: all 0.175s ease;
  cursor: pointer;
  font-size: 1.4rem;

  opacity: ${(props) => (props.isAddSectionHover ? 1 : 0)};

  p {
    position: absolute;
    display: block;
    left: 50%;
    background: white;
    padding: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.blue};
    z-index: 2;
    transform: translate(-50%, -25%);
  }

  span {
    overflow: hidden;
    text-align: center;
  }

  span:after {
    background-color: ${(props) => props.theme.colors.blue};
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 100%;
    opacity: 0.5;
  }
`;

interface Props {
  activePage: ActivePage;
}

export function Content(props: Props): JSX.Element {
  const { activePage } = props;
  const { shouldShowAddTodoItem, shouldShowSidebar } = useAppSelector(
    (state) => state.ui
  );
  const dispatch = useAppDispatch();

  const addSection = useRef<HTMLDivElement>(null);
  const isAddSectionHover = useHover(addSection);

  const handleOpenAddTodoItem = () => dispatch(uiActions.setShouldShowAddTodoItem());

  return (
    <Container>
      {activePage === 'inbox' && (
        <Flex shouldShowSidebar={shouldShowSidebar}>
          <Heading>
            <Title>Inbox</Title>
            <Options>
              <Option>
                <MessageIcon width={'15px'} height={'15px'} />
                Comments
              </Option>
              <Option>
                <SlidersIcon width={'15px'} height={'15px'} />
                View
              </Option>
              <Option>
                <EllipsisIcon width={'20px'} height={'20px'} />
              </Option>
            </Options>
          </Heading>
          <Todos>todos</Todos>
          {shouldShowAddTodoItem ? (
            <AddTodoItem />
          ) : (
            <AddTodo onClick={handleOpenAddTodoItem}>
              <div className='icon-bg'>
                <PlusIcon />
              </div>
              Add todo
            </AddTodo>
          )}

          <AddSection ref={addSection} isAddSectionHover={isAddSectionHover}>
            <p>Add section</p>
            <span></span>
          </AddSection>
          <TodoItem title={'porra'} content={'caralho'} date={new Date()} />
        </Flex>
      )}
    </Container>
  );
}
