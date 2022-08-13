import { useState } from 'react';
import { BasePageProps } from './BasePage.types';

import { Navbar } from '../../components/layout/Navbar/Navbar.component';
import { Sidebar } from '../../components/layout/Sidebar/Sidebar.component';
import { Content } from './BasePage.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { AddProjectButtonModal } from '../../components/layout/Modals/ModalsComponents/AddProjectButtonModal/AddProjectButtonModal.component';
import { ADD_PROJECT_BUTTON_MODAL } from '../../constants/constants';

export function BasePage(props: BasePageProps): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((state) => !state);

  const { modalOpenedIs } = useSelector((state: RootState) => state);

  return (
    <>
      {modalOpenedIs === ADD_PROJECT_BUTTON_MODAL && <AddProjectButtonModal />}

      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Content isSidebarOpen={isSidebarOpen}></Content>
    </>
  );
}
