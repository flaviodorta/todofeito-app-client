import { SidebarProps } from './Sidebar.types';
import { baseTheme, breakpoints } from '../../../styles/theme/theme';
import { useLayoutEffect, useRef } from 'react';
import { usePersistedState } from '../../../hooks/usePersistedState';
import { useResize } from '../../../hooks/useResize';
import { useHover } from '../../../hooks/useHover';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useEventListener } from '../../../hooks/useEventListener';

import {
  Aside,
  Ul,
  Li,
  HoveredDiv,
  Div,
  TodoCount,
  Resizer,
} from './Sidebar.styled';
import { HoveredButton } from './Sidebar.styled';

import { InboxSolidIcon as InboxIcon } from '../../shared/icons/InboxSolidIcon';
import { CalendarDayIcon as TodayIcon } from '../../shared/icons/CalendarDayIcon';
import { CalendarIcon as UpcomingIcon } from '../../shared/icons/CalendarIcon';
import { LabelIcon as FiltersAndLabelsIcon } from '../../shared/icons/LabelIcon';
import { ChevronDownIcon as RotatedChevronIcon } from '../../shared/icons/ChevronDownIcon';
import { PlusSolidIcon as AddProjectIcon } from '../../shared/icons/PlusSolidIcon';

export function Sidebar(props: SidebarProps): JSX.Element {
  const { isSidebarOpen, toggleSidebar } = props;

  const { colors } = baseTheme;

  // current and old window width values, and md breakpoint string parsed to int
  const windowSizeWidth = useWindowSize().width;
  const oldWindowWidthRef = useRef<number | undefined>(undefined);
  const breakpointMd = parseInt(breakpoints.md, 10);

  // save old window width value
  useLayoutEffect(() => {
    return () => {
      oldWindowWidthRef.current = windowSizeWidth;
    };
  });

  // close sidebar when change window width change from width major than md breakpoint
  // to a value minor than md breakpoint
  useEventListener('resize', () => {
    if (windowSizeWidth && oldWindowWidthRef.current) {
      if (
        isSidebarOpen &&
        windowSizeWidth < breakpointMd &&
        oldWindowWidthRef.current > breakpointMd
      ) {
        setTimeout(toggleSidebar, 100);
      }
    }
  });

  // width values to sidebar resizing
  const initialWidth = '35.1rem';
  const maxWidth = 50; // rem, 1 rem = 10px
  const minWidth = 27; // rem, 1 rem = 10px

  // persisted width is in rem unit
  const [persistedWidth, setPersistedWidth] = usePersistedState(
    'sidebar-width',
    initialWidth
  );

  // max and min is intenger and is changed in rem inside useResize
  const [setRef, resizeabledWidth] = useResize(
    { direction: 'right', max: maxWidth * 10, min: minWidth * 10 },
    persistedWidth
  );

  // fix a possible bug that break the max and min value width to sidebar
  useLayoutEffect(() => {
    if (parseInt(persistedWidth, 10) > maxWidth) {
      setPersistedWidth(maxWidth + 'rem');
    }

    if (parseInt(persistedWidth) < minWidth) {
      setPersistedWidth(minWidth + 'rem');
    }
  });

  // set persisted width in local storage whenever width is resized
  useLayoutEffect(() => {
    setPersistedWidth(resizeabledWidth);
  }, [resizeabledWidth]);

  const icon16px = '1.6rem';

  const projectSectionRef = useRef<HTMLDivElement | null>(null);
  const projectSectionButtonRef = useRef<HTMLDivElement | null>(null);

  const isProjectHover = useHover(projectSectionRef);
  const isProjectButtonHover = useHover(projectSectionButtonRef);

  return (
    <Aside
      ref={setRef.element}
      isSidebarOpen={isSidebarOpen}
      initialWidth={initialWidth}
      resizeabledWidth={persistedWidth}
    >
      <Resizer ref={setRef.right} />
      <Ul>
        <Li>
          <Div>
            <InboxIcon fill={colors.blue} />
            Inbox
          </Div>
          <TodoCount>234</TodoCount>
        </Li>

        <Li>
          <Div>
            <TodayIcon fill={colors.green} />
            Today
          </Div>
          <TodoCount>2</TodoCount>
        </Li>
        <Li>
          <Div>
            <UpcomingIcon fill={colors.purple} />
            Upcoming
          </Div>
          <TodoCount>2</TodoCount>
        </Li>

        <Li>
          <Div>
            <FiltersAndLabelsIcon fill={colors.orange} />
            Filters & Labels
          </Div>
          <TodoCount>2</TodoCount>
        </Li>

        <HoveredDiv ref={projectSectionRef}>
          <Li>
            <Div>
              <RotatedChevronIcon />
              Projects
            </Div>

            <HoveredButton
              ref={projectSectionButtonRef}
              isProjectHover={isProjectHover}
              isProjectButtonHover={isProjectButtonHover}
            >
              <AddProjectIcon width={icon16px} height={icon16px} />
            </HoveredButton>
          </Li>
        </HoveredDiv>
      </Ul>
    </Aside>
  );
}
