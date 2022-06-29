import { Fragment, useState } from 'react';
import { Navbar } from '../app/Navbar/Navbar.component';
import { Sidebar } from '../app/Sidebar/Sidebar.component';
import { Content, Div, Wrapper } from './Layout.styled';

export type LayoutProps = {
  activePage: string;
};

export function Layout(props: LayoutProps): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((state) => !state);

  return (
    <Wrapper>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Content isSidebarOpen={isSidebarOpen}></Content>
    </Wrapper>
  );
}
