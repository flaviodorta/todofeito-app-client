import {
  Nav,
  NavLink,
  Ul,
  Li,
  NavIconButton,
  Input,
  HoveredDiv,
  ShortcutInputButton,
} from './Navbar.styles';
import { baseTheme } from '../../../styles/theme/theme';

import { HomeOutlineIcon as HomeIcon } from '../../icons/HomeOutlineIcon';
import { ArrowGrowthIcon as CompletedTodosIcon } from '../../icons/ArrowGrowthIcon';
import { PlusSolidIcon as AddTaskIcon } from '../../icons/PlusSolidIcon';
import { BarsSolidIcon as SidebarIcon } from '../../icons/BarsSolidIcon';
import { MaginifyingGlassSolidIcon as SearchIcon } from '../../icons/MagnifyingGlassSolidIcon';
import { useState } from 'react';

export type NavbarProps = {
  toggleSidebar: () => void;
};

export function Navbar(props: NavbarProps) {
  const { white } = baseTheme.colors;
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false);
  const [isInputHover, setIsInputHover] = useState<boolean>(false);

  const openInput = () => setIsInputOpen(true);
  const closeInput = () => setIsInputOpen(false);

  const enterCursorInput = () => setIsInputHover(true);
  const leaveCursorInput = () => setIsInputHover(false);

  return (
    <Nav>
      <Ul>
        <Li>
          <NavIconButton onClick={props.toggleSidebar}>
            <SidebarIcon height={'26px'} width={'26px'} fill={white} />
          </NavIconButton>
        </Li>

        <Li>
          <NavLink to='/home'>
            <NavIconButton>
              <HomeIcon height={'28px'} width={'28px'} stroke={white} />
            </NavIconButton>
          </NavLink>
        </Li>

        <HoveredDiv
          isInputOpen={isInputOpen}
          isInputHover={isInputHover}
          onClick={openInput}
          onMouseEnter={enterCursorInput}
          onMouseLeave={() => {
            closeInput();
            leaveCursorInput();
          }}
        >
          <Li>
            <SearchIcon id='search-icon' />
            <Input
              isInputOpen={isInputOpen}
              isInputHover={isInputHover}
              type='text'
              placeholder='Search'
            />
            {(isInputOpen && <ShortcutInputButton>/</ShortcutInputButton>) ||
              (isInputHover && <ShortcutInputButton>/</ShortcutInputButton>)}
          </Li>
        </HoveredDiv>
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
