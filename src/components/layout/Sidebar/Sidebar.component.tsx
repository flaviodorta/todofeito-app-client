import { useLayoutEffect } from 'react';
import { usePersistedState } from '../../../hooks/usePersistedState';
import { useResize } from '../../../hooks/useResize';
import { SidebarProps } from './Sidebar.types';
import { baseTheme } from '../../../styles/theme/theme';

import { Aside, Ul, Li, Div, TodoCount, Resizer } from './Sidebar.styled';

import { InboxSolidIcon as InboxIcon } from '../../shared/icons/InboxSolidIcon';
import { CalendarDayIcon as TodayIcon } from '../../shared/icons/CalendarDayIcon';
import { CalendarIcon as UpcomingIcon } from '../../shared/icons/CalendarIcon';
import { LabelIcon as FiltersAndLabelsIcon } from '../../shared/icons/LabelIcon';

export function Sidebar(props: SidebarProps): JSX.Element {
  const { isSidebarOpen } = props;

  const { colors } = baseTheme;

  const initialWidth = '35.1rem';
  const maxWidth = 50; // rem, 1 rem = 10px
  const minWidth = 27; // rem, 1 rem = 10px

  const [persistedWidth, setPersistedWidth] = usePersistedState(
    'sidebar-width',
    initialWidth
  );

  const [setRef, resizeabledWidth] = useResize(
    { direction: 'right', max: maxWidth * 10, min: minWidth * 10 },
    persistedWidth
  );

  useLayoutEffect(() => {
    if (parseInt(persistedWidth, 10) > maxWidth) {
      setPersistedWidth(maxWidth + 'rem');
    }

    if (parseInt(persistedWidth) < minWidth) {
      setPersistedWidth(minWidth + 'rem');
    }
  });

  useLayoutEffect(() => {
    setPersistedWidth(resizeabledWidth);
    console.log('persisted width: ', persistedWidth);
    console.log('resizeable width: ', resizeabledWidth);
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
        <Li>
          <Div>
            <InboxIcon fill={colors.blue} />
            Inbox
          </Div>
          <TodoCount>2</TodoCount>
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
      </Ul>
    </Aside>
  );
}
