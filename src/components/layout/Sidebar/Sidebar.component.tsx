import { useLayoutEffect } from 'react';
import { usePersistedState } from '../../../hooks/usePersistedState';
import { useResize } from '../../../hooks/useResize';
import { SidebarProps } from './Sidebar.types';

import { Aside, Ul, Li, Div, TodoCount, Resizer } from './Sidebar.styled';

export function Sidebar(props: SidebarProps): JSX.Element {
  const { isSidebarOpen } = props;

  const initialWidth = '35.1rem';

  const [persistedWidth, setPersistedWidth] = usePersistedState(
    'sidebar-width',
    initialWidth
  );

  const [setRef, resizeabledWidth] = useResize(
    { direction: 'right', max: 500, min: 270 },
    persistedWidth
  );

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
        <Li>
          <Div>inbox</Div>
          <TodoCount>2</TodoCount>
        </Li>
        <Li>today</Li>
        <Li>upcoming</Li>
        <Li>filters & labels</Li>
      </Ul>
    </Aside>
  );
}
