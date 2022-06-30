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
import { useLayoutEffect, useState } from 'react';
import { NavbarProps } from './Navbar.types';

import { HomeOutlineIcon as HomeIcon } from '../../icons/HomeOutlineIcon';
import { ArrowGrowthIcon as CompletedTodosIcon } from '../../icons/ArrowGrowthIcon';
import { PlusSolidIcon as AddTaskIcon } from '../../icons/PlusSolidIcon';
import { BarsSolidIcon as SidebarIcon } from '../../icons/BarsSolidIcon';
import { MaginifyingGlassSolidIcon as SearchIcon } from '../../icons/MagnifyingGlassSolidIcon';
import { BellRegularIcon as NotificationsIcon } from '../../icons/BellRegularIcon';
import { CircleUserSolidIcon as UserIcon } from '../../icons/CircleUserSolidIcon';
import { Label } from '../../shared/Label/Label';
import { useDimensions } from '../../../hooks/useDimensions';

export function Navbar(props: NavbarProps) {
  const { white } = baseTheme.colors;
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false);
  const [isInputHover, setIsInputHover] = useState<boolean>(false);

  const openInput = () => setIsInputOpen(true);
  const closeInput = () => setIsInputOpen(false);

  const enterCursorInput = () => setIsInputHover(true);
  const leaveCursorInput = () => setIsInputHover(false);

  const [setRef, dimensions] = useDimensions<HTMLButtonElement>();

  useLayoutEffect(() => {
    console.log(window.innerWidth);
  });

  return (
    <Nav>
      <Ul>
        <Li>
          <NavIconButton ref={setRef} onClick={props.toggleSidebar}>
            <SidebarIcon fill={white} />
          </NavIconButton>
          <Label content={'Siderbar icon'} />
        </Li>

        <Li>
          <NavLink to='/home'>
            <NavIconButton>
              <HomeIcon height={'24px'} width={'24px'} stroke={white} />
            </NavIconButton>
          </NavLink>
        </Li>

        <HoveredDiv
          isInputOpen={isInputOpen}
          isInputHover={isInputHover}
          onMouseEnter={enterCursorInput}
          onMouseLeave={leaveCursorInput}
          onFocus={openInput}
          onBlur={closeInput}
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
          <NavIconButton>
            <AddTaskIcon fill={white} />
          </NavIconButton>
        </Li>

        <Li>
          <NavIconButton>
            <CompletedTodosIcon fill={white} />
          </NavIconButton>
        </Li>

        <Li>
          <NavIconButton>
            <NotificationsIcon fill={white} />
          </NavIconButton>
        </Li>

        <Li>
          <NavIconButton>
            <UserIcon fill={white} />
          </NavIconButton>
        </Li>
      </Ul>
    </Nav>
  );
}
