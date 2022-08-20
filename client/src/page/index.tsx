import { useAppSelector } from '../redux/store';

import { Layout } from './styled';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Content } from '../components/Content';
import { AddProjectButtonModal } from '../components/Modals/ModalsComponents/AddProjectButtonModal';
import { AddTodoModal } from '../components/Todo/AddTodoModal';

import { ActivePage } from '../redux/slice/types';

interface Props {
  activePage: ActivePage;
}

export function Page(props: Props): JSX.Element {
  const { activePage } = props;
  const { modalShowIs } = useAppSelector((state) => state.ui);

  return (
    <Layout>
      {modalShowIs === 'add-project-button-modal' && <AddProjectButtonModal />}
      {modalShowIs === 'add-todo-modal' && <AddTodoModal />}

      <Navbar />
      <Sidebar />

      <Content activePage={activePage} />
    </Layout>
  );
}
