import { BasePageProps } from './BasePage.types';

import { useAppSelector } from '../../redux/store';
import { useState } from 'react';

import { Navbar } from '../../components/Navbar/Navbar.component';
import { Sidebar } from '../../components/Sidebar/Sidebar.component';
import { Content } from './BasePage.styled';
import { AddProjectButtonModal } from '../../components/Modals/ModalsComponents/AddProjectButtonModal/AddProjectButtonModal.component';
import { ADD_PROJECT_BUTTON_MODAL, ADD_TODO_MODAL } from '../../constants';
import { AddTodoModal } from '../../components/Todo/AddTodoModal/AddTodoModal.components';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: red;
  z-index: 120;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  activePage: string;
  children: React.ReactNode;
}

export function BasePage(props: Props): JSX.Element {
  const { children, activePage } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((state) => !state);

  const { modalOpenIs } = useAppSelector((state) => state);

  return (
    <Layout>
      {modalOpenIs === ADD_PROJECT_BUTTON_MODAL && <AddProjectButtonModal />}
      {modalOpenIs === ADD_TODO_MODAL && <AddTodoModal />}

      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Content isSidebarOpen={isSidebarOpen}>{children}</Content>
    </Layout>
  );
}
