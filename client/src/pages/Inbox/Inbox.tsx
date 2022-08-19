import { BasePage } from '../base-page/BasePage.component';

import { useAppSelector } from '../../redux/store';

import { EllipsisSolidIcon as EllipsisIcon } from '../../components/Icons/EllipsisSolid';
import { SlidersSolidIcon as SlidersIcon } from '../../components/Icons/SlidersSolidIcon';
import { MessageRegularIcon as MessageIcon } from '../../components/Icons/MessageRegularIcon';

import styled from 'styled-components';
export const Container = styled.div`
  z-index: 120;
  width: 100%;
  display: flex;
  justify-content: center;
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
  color: grey;
  gap: 6px;
  border-radius: 2.5px;

  svg {
    fill: grey;
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
`;

export const Flex = styled.div<{ isSidebarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  margin-left: ${(props) => (props.isSidebarOpen ? '10rem' : '0rem')};
  transition: margin-left 0.145s ease;
`;

export function Inbox(): JSX.Element {
  const activePage = 'inbox';
  const { isSidebarOpen } = useAppSelector((state) => state);

  return (
    <>
      <BasePage activePage={activePage}>
        <Container>
          <Flex isSidebarOpen={isSidebarOpen}>
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
            <p>add task</p>
            <p>add section (invisible withouthovet)</p>
          </Flex>
        </Container>
      </BasePage>
    </>
  );
}
