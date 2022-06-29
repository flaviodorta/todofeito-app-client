import { Aside } from './Sidebar.styles';

export type SidebarProps = {
  isSidebarOpen: boolean;
};

export function Sidebar(props: SidebarProps): JSX.Element {
  return (
    <Aside isSidebarOpen={props.isSidebarOpen}>
      <ul>
        <li>Inbox</li>
        <li>Today</li>
      </ul>
    </Aside>
  );
}
