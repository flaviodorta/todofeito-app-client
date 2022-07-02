import { useResize } from '../../../hooks/useResize';
import { Aside, Ul, Li, Div, TodoCount, Resizer } from './Sidebar.styled';
import { SidebarProps } from './Sidebar.types';

export function Sidebar(props: SidebarProps): JSX.Element {
  const { isSidebarOpen } = props;
  const { element, right } = useResize({ side: 'right', max: 600, min: 200 });

  return (
    <Aside ref={element} isSidebarOpen={isSidebarOpen}>
      <Resizer ref={right} />
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
