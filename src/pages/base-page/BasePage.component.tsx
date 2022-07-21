import { useState } from 'react';
import { BasePageProps } from './BasePage.types';

import { Navbar } from '../../components/layout/Navbar/Navbar.component';
import { Sidebar } from '../../components/layout/Sidebar/Sidebar.component';
import { Content, ModalBackground } from './BasePage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, todosActions } from '../../store/store';
import { AddProjectModal } from '../../components/layout/Modals/AddProjectModal/AddProjectModal.component';

export function BasePage(props: BasePageProps): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((state) => !state);

  const { modal } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const toggleModal = () => dispatch(todosActions.showModal(null));

  console.log(modal);

  return (
    <>
      {modal && <ModalBackground onClick={toggleModal} />}
      {modal === 'add-project-modal' && <AddProjectModal />}

      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Content isSidebarOpen={isSidebarOpen}></Content>
    </>
  );
}
