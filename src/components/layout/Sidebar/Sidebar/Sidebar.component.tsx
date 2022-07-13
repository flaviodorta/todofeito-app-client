import { SidebarProps } from './Sidebar.types';
import { baseTheme, breakpoints } from '../../../../styles/theme/theme';
import { useLayoutEffect, useRef } from 'react';
import { usePersistedState } from '../../../../hooks/usePersistedState';
import { useResize } from '../../../../hooks/useResize';
import { useHover } from '../../../../hooks/useHover';
import { useWindowSize } from '../../../../hooks/useWindowSize';
import { useEventListener } from '../../../../hooks/useEventListener';

import { Aside, Ul, Resizer } from './Sidebar.styled';

import { InboxSolidIcon as InboxIcon } from '../../../shared/icons/InboxSolidIcon';
import { CalendarDayIcon as TodayIcon } from '../../../shared/icons/CalendarDayIcon';
import { CalendarIcon as UpcomingIcon } from '../../../shared/icons/CalendarIcon';
import { LabelIcon as FiltersAndLabelsIcon } from '../../../shared/icons/LabelIcon';
import { ProjectOption } from '../Options/ProjectsOption/ProjectOption.component';
import { Option } from '../Options/Option/Option.component';

export function Sidebar(props: SidebarProps): JSX.Element {
  const { isSidebarOpen, toggleSidebar } = props;
  const { colors } = baseTheme;

  const windowSizeWidth = useWindowSize().width;
  const oldWindowWidthRef = useRef<number | undefined>(undefined);
  const breakpointMd = parseInt(breakpoints.md, 10);

  useLayoutEffect(() => {
    return () => {
      oldWindowWidthRef.current = windowSizeWidth;
    };
  });

  // type RemUnit = `${number}${'rem'}` | '0' | 0;

  // const a: RemUnit = '3rem';

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
  });

  useLayoutEffect(() => {
    setPersistedWidth(resizeabledWidth);
  }, [resizeabledWidth]);

  return (
    <Aside
      ref={setRef.element}
      isSidebarOpen={isSidebarOpen}
      initialWidth={initialWidth}
      resizeabledWidth={persistedWidth}
    >
      <Resizer ref={setRef.right} />
      <Ul>
        <Option todoCount={23}>
          <InboxIcon fill={colors.blue} />
          Inbox
        </Option>

        <Option todoCount={21}>
          <TodayIcon fill={colors.green} />
          Today
        </Option>

        <Option todoCount={12}>
          <UpcomingIcon fill={colors.purple} />
          Upcoming
        </Option>

        <Option todoCount={53}>
          <FiltersAndLabelsIcon fill={colors.orange} />
          Filters & Labels
        </Option>

        <ProjectOption />
      </Ul>
    </Aside>
  );
}
