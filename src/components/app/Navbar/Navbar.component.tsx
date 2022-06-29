import { useAppTheme } from '../../../context/theme/ThemeAppContext';
import { Nav, NavLink, Ul } from './Navbar.styles';

export type NavbarProps = {
  toggleSidebar: () => void;
};

export function Navbar(props: NavbarProps) {
  return (
    <Nav>
      <Ul>
        <li>
          <button onClick={props.toggleSidebar}>Sidebar</button>
        </li>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <input type='text' />
        </li>
      </Ul>

      <Ul>
        <li>plus</li>
        <li>completed</li>
        <li>notifications</li>
        <li>user</li>
      </Ul>
    </Nav>
  );
}
