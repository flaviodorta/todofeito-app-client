import { Layout } from './styled';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Content } from '../components/Content';
import { AddProjectButtonModal } from '../components/Modals/ModalsComponents/AddProjectButtonModal';
import { AddTodoModal } from '../components/Modals/ModalsComponents/AddTodoModal';

import { ActivePage } from '../redux/slice/types';
import { useToggle } from '../hooks/useToggle';

interface Props {
  activePage: ActivePage;
}

export function Page(props: Props): JSX.Element {
  const { activePage } = props;
  const [shouldShowAddTodoModal, setShouldShowAddTodoModal] = useToggle(false);
  const [shouldShowAddProjectModal, setShouldShowAddProjectModal] = useToggle(false);

  return (
    <Layout>
      <AddProjectButtonModal
        shouldShowModal={shouldShowAddProjectModal}
        setShouldShowModal={setShouldShowAddProjectModal}
      />

      <AddTodoModal
        shouldShowModal={shouldShowAddTodoModal}
        setShouldShowModal={setShouldShowAddTodoModal}
      />

      <Navbar setShouldShowModal={setShouldShowAddTodoModal} />
      <Sidebar setShouldShowModal={setShouldShowAddProjectModal} />

      <Content activePage={activePage} />
    </Layout>
  );
}
