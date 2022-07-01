import { useRef } from 'react';
import { NavbarProps } from './Navbar.types';
import { useHover } from '../../../hooks/useHover';
import { useFocus } from '../../../hooks/useFocus';
import { baseTheme } from '../../../styles/theme/theme';
import { NavbarData as Data } from './Navbar.data';

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
import { Label } from '../../shared/Label/Label.component';

import { HomeOutlineIcon as HomeIcon } from '../../icons/HomeOutlineIcon';
import { ArrowGrowthIcon as CompletedTodosIcon } from '../../icons/ArrowGrowthIcon';
import { PlusSolidIcon as AddTodoIcon } from '../../icons/PlusSolidIcon';
import { BarsSolidIcon as SidebarIcon } from '../../icons/BarsSolidIcon';
import { MaginifyingGlassSolidIcon as SearchIcon } from '../../icons/MagnifyingGlassSolidIcon';
import { BellRegularIcon as NotificationsIcon } from '../../icons/BellRegularIcon';
import { CircleUserSolidIcon as UserIcon } from '../../icons/CircleUserSolidIcon';

export function Navbar(props: NavbarProps) {
  const { toggleSidebar, isSidebarOpen } = props;

  const { iconsData, setIconName } = Data();

  const { sidebar, home, addTodo, completedTodos, notifications, user } =
    iconsData;

  // foo to set label state to respective button name or set to none when
  // any icon is hovered
  const setIconNameTo = (iconName: string) => setIconName(iconName);
  const setIconNameToNone = () => setIconName('none');

  const divWithHoverRef = useRef<HTMLDivElement | null>(null);

  const [isDivWithHoverFocus, setOnFocus, setOnBlur] =
    useFocus(divWithHoverRef);

  const isInputHover = useHover(divWithHoverRef);

  const LabelComponent = (
    isVisible: boolean,
    content: string | [string, string],
    parentWidth: number
  ) => (
    <Label isVisible={isVisible} content={content} parentWidth={parentWidth} />
  );

  const { white } = baseTheme.colors;

  return (
    <Nav>
      <Ul>
        <Li
          ref={sidebar.ref}
          onMouseEnter={() => setIconNameTo('sidebar')}
          onMouseLeave={setIconNameToNone}
        >
          <NavIconButton onClick={toggleSidebar}>
            <SidebarIcon fill={white} />
          </NavIconButton>
          {LabelComponent(
            sidebar.isLabelVisible,
            isSidebarOpen ? sidebar.labelContent[0] : sidebar.labelContent[1],
            sidebar.width
          )}
        </Li>

        <Li
          ref={home.ref}
          onMouseEnter={() => setIconNameTo('home')}
          onMouseLeave={setIconNameToNone}
        >
          <NavLink to='/home'>
            <NavIconButton>
              <HomeIcon height={'24px'} width={'24px'} stroke={white} />
            </NavIconButton>
            {LabelComponent(home.isLabelVisible, home.labelContent, home.width)}
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
        <Li
          ref={addTodo.ref}
          onMouseEnter={() => setIconNameTo('add-todo')}
          onMouseLeave={setIconNameToNone}
        >
          <NavIconButton>
            <AddTodoIcon fill={white} />
          </NavIconButton>
          {LabelComponent(
            addTodo.isLabelVisible,
            addTodo.labelContent,
            addTodo.width
          )}
        </Li>

        <Li
          ref={completedTodos.ref}
          onMouseEnter={() => setIconNameTo('completed-todos')}
          onMouseLeave={setIconNameToNone}
        >
          <NavIconButton>
            <CompletedTodosIcon fill={white} />
          </NavIconButton>
          {LabelComponent(
            completedTodos.isLabelVisible,
            completedTodos.labelContent,
            completedTodos.width
          )}
        </Li>

        <Li
          ref={notifications.ref}
          onMouseEnter={() => setIconNameTo('notifications')}
          onMouseLeave={setIconNameToNone}
        >
          <NavIconButton>
            <NotificationsIcon fill={white} />
          </NavIconButton>
          {LabelComponent(
            notifications.isLabelVisible,
            notifications.labelContent,
            notifications.width
          )}
        </Li>

        <Li
          ref={user.ref}
          onMouseEnter={() => setIconNameTo('user')}
          onMouseLeave={setIconNameToNone}
        >
          <NavIconButton>
            <UserIcon fill={white} />
          </NavIconButton>
          {LabelComponent(user.isLabelVisible, user.labelContent, user.width)}
        </Li>
      </Ul>
    </Nav>
  );
}
