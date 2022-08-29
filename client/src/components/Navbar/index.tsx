import { useRef } from 'react';
import { useHover } from '../../hooks/useHover';
import { useToggle } from '../../hooks/useToggle';
import { uiActions, useAppDispatch, useAppSelector } from '../../redux/store';
import { baseTheme } from '../../styles/theme/theme';
import { NavbarData as Data } from './data';

import {
  Nav,
  Ul,
  Li,
  HoveredButton,
  Input,
  HoveredDiv,
  ShortcutInputButton,
} from './styled';
import { Label } from '../Label';
import { NavLink } from '../NavLink/NavLink.styled';

import {
  HomeOutlineIcon as HomeIcon,
  ArrowGrowthIcon as CompletedTodosIcon,
  PlusSolidIcon as AddTodoIcon,
  BarsSolidIcon as SidebarIcon,
  MagnifyingGlassSolidIcon as SearchIcon,
  BellRegularIcon as NotificationsIcon,
  CircleUserSolidIcon as UserIcon,
} from '../Icons';

export function Navbar() {
  const dispatch = useAppDispatch();
  const { white } = baseTheme.colors;
  const { iconsData, setIconName } = Data();
  const { shouldShowSidebar } = useAppSelector((state) => state.ui);

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

  const toggleSidebar = () => dispatch(uiActions.setShouldShowSidebar());

  const toggleAddTodoItemModal = () =>
    dispatch(uiActions.setShouldShowAddTodoItemModal());

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
            shouldShowSidebar ? sidebar.labelContent[0] : sidebar.labelContent[1],
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
          <HoveredButton
            onClick={toggleAddTodoItemModal}
            height={hoveredButtonHeight}
          >
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
