import { Nav, NavLink, Ul, Li } from './Navbar.styles';
import { baseTheme } from '../../../styles/theme/theme';

import { HomeOutlineIcon as HomeIcon } from '../../icons/HomeOutlineIcon';
import { ArrowGrowthIcon as CompletedTodosIcon } from '../../icons/ArrowGrowthIcon';
import { PlusSolidIcon as AddTaskIcon } from '../../icons/PlusSolidIcon';

export type NavbarProps = {
  toggleSidebar: () => void;
};

export function Navbar(props: NavbarProps) {
  const { white } = baseTheme.colors;

  return (
    <Nav>
      <Ul>
        <Li>
          <button onClick={props.toggleSidebar}>
            <HomeIcon />
          </button>
        </Li>
        <Li>
          <NavLink to='/home'></NavLink>
        </Li>
        <Li>
          <input type='text' />
        </Li>
      </Ul>

      <Ul>
        <Li>
          <AddTaskIcon fill={white} />
        </Li>
        <Li>
          <CompletedTodosIcon fill={white} />
        </Li>
        <Li>notifications</Li>
        <Li>user</Li>
      </Ul>
    </Nav>
  );
}
