import { SidebarProps } from './Sidebar.types';
import { baseTheme, breakpoints } from '../../../styles/theme/theme';
import { useLayoutEffect, useRef } from 'react';
import { usePersistedState } from '../../../hooks/usePersistedState';
import { useResize } from '../../../hooks/useResize';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useEventListener } from '../../../hooks/useEventListener';

import {
  SidebarContainer,
  SidebarOptionsList,
  SidebarResizer,
} from './Sidebar.styled';

import { InboxSolidIcon as InboxIcon } from '../../shared/icons/InboxSolidIcon';
import { CalendarDayIcon as TodayIcon } from '../../shared/icons/CalendarDayIcon';
import { CalendarIcon as UpcomingIcon } from '../../shared/icons/CalendarIcon';
import { LabelIcon as FiltersAndLabelsIcon } from '../../shared/icons/LabelIcon';
import { SidebarProjectOption } from './Options/ProjectsOption/SidebarProjectOption.component';
import { SidebarOption } from './Options/Option/SidebarOption.component';

export function Sidebar(props: SidebarProps): JSX.Element {
  const { isSidebarOpen, toggleSidebar } = props;
  const { colors } = baseTheme;

  const windowWidth = useWindowSize().width;
  const oldWindowWidthRef = useRef<number | undefined>(undefined);
  const breakpointMd = parseInt(breakpoints.md, 10);

  useLayoutEffect(() => {
    return () => {
      oldWindowWidthRef.current = windowWidth;
    };
  });

  // automaticly sidebar close when screen resize to brakpoint < lg
  useEventListener('resize', () => {
    if (windowWidth && oldWindowWidthRef.current) {
      if (
        isSidebarOpen &&
        windowWidth < breakpointMd &&
        oldWindowWidthRef.current > breakpointMd
      ) {
        setTimeout(toggleSidebar, 100);
      }
    }
  });

  const initialWidth = '35.1rem';
  const maxWidthRem = 50;
  const minWidthRem = 27;

  const [persistedWidth, setPersistedWidth] = usePersistedState(
    'sidebar-width',
    initialWidth
  );

  const [setRef, resizeabledWidth] = useResize(
    { direction: 'right', max: maxWidthRem * 10, min: minWidthRem * 10 },
    persistedWidth
  );

  // fix a possible bug that break the max and min value width to sidebar
  useLayoutEffect(() => {
    if (parseInt(persistedWidth, 10) > maxWidthRem) {
      setPersistedWidth(maxWidthRem + 'rem');
    }

    if (parseInt(persistedWidth) < minWidthRem) {
      setPersistedWidth(minWidthRem + 'rem');
    }
  }, [persistedWidth]);

  useLayoutEffect(() => {
    setPersistedWidth(resizeabledWidth);
  }, [resizeabledWidth, setPersistedWidth]);

  return (
    <SidebarContainer
      ref={setRef.element}
      isSidebarOpen={isSidebarOpen}
      initialWidth={initialWidth}
      resizeabledWidth={persistedWidth}
    >
      <SidebarResizer ref={setRef.right} />
      <SidebarOptionsList>
        <SidebarOption todoCount={23}>
          <InboxIcon fill={colors.blue} />
          Inbox
        </SidebarOption>

        <SidebarOption todoCount={21}>
          <TodayIcon fill={colors.green} />
          Today
        </SidebarOption>

        <SidebarOption todoCount={12}>
          <UpcomingIcon fill={colors.purple} />
          Upcoming
        </SidebarOption>

        <SidebarOption todoCount={53}>
          <FiltersAndLabelsIcon fill={colors.orange} />
          Filters & Labels
        </SidebarOption>

        <SidebarProjectOption />
      </SidebarOptionsList>
    </SidebarContainer>
  );
}
