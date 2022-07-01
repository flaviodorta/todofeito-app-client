import { Aside } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export function Sidebar(props: SidebarProps): JSX.Element {
  const { isSidebarOpen } = props;

  return (
    <Aside isSidebarOpen={isSidebarOpen}>
      <ul>
        <li>Inbox</li>
        <li>Today</li>
      </ul>
    </Aside>
  );
}
