import { useRef } from 'react';
import { NavbarProps } from './Navbar.types';
import { useHover } from '../../../hooks/useHover';
import { useToggle } from '../../../hooks/useToggle';
import { baseTheme } from '../../../styles/theme/theme';
import { NavbarData as Data } from './Navbar.data';

import {
  Nav,
  Ul,
  Li,
  HoveredButton,
  Input,
  HoveredDiv,
  ShortcutInputButton,
} from './Navbar.styled';
import { Label } from '../../shared/Label/Label.component';
import { NavLink } from '../../shared/NavLink/NavLink.styled';

import { HomeOutlineIcon as HomeIcon } from '../../shared/icons/HomeOutlineIcon';
import { ArrowGrowthIcon as CompletedTodosIcon } from '../../shared/icons/ArrowGrowthIcon';
import { PlusSolidIcon as AddTodoIcon } from '../../shared/icons/PlusSolidIcon';
import { BarsSolidIcon as SidebarIcon } from '../../shared/icons/BarsSolidIcon';
import { MaginifyingGlassSolidIcon as SearchIcon } from '../../shared/icons/MagnifyingGlassSolidIcon';
import { BellRegularIcon as NotificationsIcon } from '../../shared/icons/BellRegularIcon';
import { CircleUserSolidIcon as UserIcon } from '../../shared/icons/CircleUserSolidIcon';
import { globalActions, useAppDispatch } from '../../../redux/store';
import { ADD_TODO_MODAL } from '../../../constants';

export function Navbar(props: NavbarProps) {
  const { toggleSidebar, isSidebarOpen } = props;
  const { white } = baseTheme.colors;
  const { iconsData, setIconName } = Data();

  const { sidebar, home, addTodo, completedTodos, notifications, user } = iconsData;
  const setIconNameTo = (iconName: string) => setIconName(iconName);

  const hoveredDivRef = useRef<HTMLDivElement | null>(null);
  const [isHoveredDivFocus, toggleHoveredDivFocus] = useToggle(false);
  const isInputHover = useHover(hoveredDivRef);

  const LabelComponent = (
    isVisible: boolean,
    content: string | [string, string],
    parentWidth: number
  ) => <Label isVisible={isVisible} content={content} parentWidth={parentWidth} />;

  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    dispatch(globalActions.setModal(ADD_TODO_MODAL));
  };

  const icon24px = '2.4rem';
  const hoveredButtonHeight = '4.8rem';

  return (
    <Nav>
      <Ul>
        <Li
          ref={sidebar.ref}
          onMouseEnter={() => setIconNameTo('sidebar')}
          onMouseLeave={() => setIconNameTo('none')}
        >
          <HoveredButton onClick={toggleSidebar} height={hoveredButtonHeight}>
            <SidebarIcon fill={white.one} />
          </HoveredButton>

          {LabelComponent(
            sidebar.isLabelVisible,
            isSidebarOpen ? sidebar.labelContent[0] : sidebar.labelContent[1],
            sidebar.width
          )}
        </Li>

        <Li
          ref={home.ref}
          onMouseEnter={() => setIconNameTo('home')}
          onMouseLeave={() => setIconNameTo('none')}
        >
          <NavLink to='/home'>
            <HoveredButton height={hoveredButtonHeight}>
              <HomeIcon height={icon24px} width={icon24px} stroke={white.one} />
            </HoveredButton>

            {LabelComponent(home.isLabelVisible, home.labelContent, home.width)}
          </NavLink>
        </Li>

        <HoveredDiv
          ref={hoveredDivRef}
          isInputHover={isInputHover}
          isHoveredDivFocus={isHoveredDivFocus}
          onFocus={toggleHoveredDivFocus}
          onBlur={toggleHoveredDivFocus}
        >
          <Li>
            <SearchIcon id='search-icon' />
            <Input
              isHoveredDivFocus={isHoveredDivFocus}
              isInputHover={isInputHover}
              type='text'
              placeholder='Search'
            />
            {(isHoveredDivFocus && <ShortcutInputButton>/</ShortcutInputButton>) ||
              (isInputHover && <ShortcutInputButton>/</ShortcutInputButton>)}
          </Li>
        </HoveredDiv>
      </Ul>

      <Ul>
        <Li
          ref={addTodo.ref}
          onMouseEnter={() => setIconNameTo('add-todo')}
          onMouseLeave={() => setIconNameTo('none')}
        >
          <HoveredButton onClick={handleAddTodo} height={hoveredButtonHeight}>
            <AddTodoIcon fill={white.one} />
          </HoveredButton>

          {LabelComponent(
            addTodo.isLabelVisible,
            addTodo.labelContent,
            addTodo.width
          )}
        </Li>

        <Li
          ref={completedTodos.ref}
          onMouseEnter={() => setIconNameTo('completed-todos')}
          onMouseLeave={() => setIconNameTo('none')}
        >
          <HoveredButton height={hoveredButtonHeight}>
            <CompletedTodosIcon fill={white.one} />
          </HoveredButton>

          {LabelComponent(
            completedTodos.isLabelVisible,
            completedTodos.labelContent,
            completedTodos.width
          )}
        </Li>

        <Li
          ref={notifications.ref}
          onMouseEnter={() => setIconNameTo('notifications')}
          onMouseLeave={() => setIconNameTo('none')}
        >
          <HoveredButton height={hoveredButtonHeight}>
            <NotificationsIcon fill={white.one} />
          </HoveredButton>

          {LabelComponent(
            notifications.isLabelVisible,
            notifications.labelContent,
            notifications.width
          )}
        </Li>

        <Li
          ref={user.ref}
          onMouseEnter={() => setIconNameTo('user')}
          onMouseLeave={() => setIconNameTo('none')}
        >
          <HoveredButton height={hoveredButtonHeight}>
            <UserIcon fill={white.one} />
          </HoveredButton>

          {LabelComponent(user.isLabelVisible, user.labelContent, user.width)}
        </Li>
      </Ul>
    </Nav>
  );
}
