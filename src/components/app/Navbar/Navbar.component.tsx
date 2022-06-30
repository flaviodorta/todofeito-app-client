import {
  Nav,
  NavLink,
  Ul,
  Li,
  NavIconButton,
  Input,
  DivWithHover,
  ShortcutInputButton,
} from './Navbar.styles';
import { baseTheme } from '../../../styles/theme/theme';
import { useState, useRef } from 'react';
import { useDimensions } from '../../../hooks/useDimensions';
import { NavbarProps } from './Navbar.types';

import { Label } from '../../shared/Label/Label.component';

import { HomeOutlineIcon as HomeIcon } from '../../icons/HomeOutlineIcon';
import { ArrowGrowthIcon as CompletedTodosIcon } from '../../icons/ArrowGrowthIcon';
import { PlusSolidIcon as AddTaskIcon } from '../../icons/PlusSolidIcon';
import { BarsSolidIcon as SidebarIcon } from '../../icons/BarsSolidIcon';
import { MaginifyingGlassSolidIcon as SearchIcon } from '../../icons/MagnifyingGlassSolidIcon';
import { BellRegularIcon as NotificationsIcon } from '../../icons/BellRegularIcon';
import { CircleUserSolidIcon as UserIcon } from '../../icons/CircleUserSolidIcon';
import { useHover } from '../../../hooks/useHover';
import { useFocus } from '../../../hooks/useFocus';

export function Navbar(props: NavbarProps) {
  const { white } = baseTheme.colors;

  const divWithHoverRef = useRef<HTMLDivElement | null>(null);

  const [isDivWithHoverFocus, setOnFocus, setOnBlur] =
    useFocus(divWithHoverRef);
  const isInputHover = useHover(divWithHoverRef);

  const [setRef, dimensions] = useDimensions<HTMLButtonElement>();

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

        <DivWithHover
          ref={divWithHoverRef}
          isInputHover={isInputHover}
          isDivWithHoverFocus={isDivWithHoverFocus}
          onFocus={setOnFocus}
          onBlur={setOnBlur}
        >
          <Li>
            <SearchIcon id='search-icon' />
            <Input
              isDivWithHoverFocus={isDivWithHoverFocus}
              isInputHover={isInputHover}
              type='text'
              placeholder='Search'
            />
            {(isDivWithHoverFocus && (
              <ShortcutInputButton>/</ShortcutInputButton>
            )) ||
              (isInputHover && <ShortcutInputButton>/</ShortcutInputButton>)}
          </Li>
        </DivWithHover>
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
