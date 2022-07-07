import { useState } from 'react';
import { BasePageProps } from './BasePage.types';

import { Navbar } from '../../components/layout/Navbar/Navbar.component';
import { Sidebar } from '../../components/layout/Sidebar/Sidebar.component';
import { Content } from './BasePage.styled';

export function BasePage(props: BasePageProps): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((state) => !state);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Content isSidebarOpen={isSidebarOpen}></Content>
    </>
  );
}
