import { useState } from 'react';
import { LayoutProps } from './Layout.types';

import { Navbar } from '../app/Navbar/Navbar.component';
import { Sidebar } from '../app/Sidebar/Sidebar.component';
import { Content } from './Layout.styled';

export function Layout(props: LayoutProps): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((state) => !state);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Content isSidebarOpen={isSidebarOpen}></Content>
    </>
  );
}
