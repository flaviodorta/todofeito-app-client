import { BasePageProps } from './BasePage.types';

import { useAppSelector } from '../../redux/store';
import { useState } from 'react';

import { Navbar } from '../../components/layout/Navbar/Navbar.component';
import { Sidebar } from '../../components/layout/Sidebar/Sidebar.component';
import { Content } from './BasePage.styled';
import { AddProjectButtonModal } from '../../components/layout/Modals/ModalsComponents/AddProjectButtonModal/AddProjectButtonModal.component';
import { ADD_PROJECT_BUTTON_MODAL, ADD_TODO_MODAL } from '../../constants';
import { AddTodoModal } from '../../components/shared/Todo/AddTodoModal/AddTodoModal.components';

export function BasePage(props: BasePageProps): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((state) => !state);

  const { modalOpenIs } = useAppSelector((state) => state);

  return (
    <>
      {modalOpenIs === ADD_PROJECT_BUTTON_MODAL && <AddProjectButtonModal />}
      {modalOpenIs === ADD_TODO_MODAL && <AddTodoModal />}

      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Content isSidebarOpen={isSidebarOpen}></Content>
    </>
  );
}
