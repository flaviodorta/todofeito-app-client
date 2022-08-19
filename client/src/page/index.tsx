import { useAppSelector } from '../redux/store';

import { Layout } from './styled';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Content } from '../components/Content';
import { AddProjectButtonModal } from '../components/Modals/ModalsComponents/AddProjectButtonModal';
import { ADD_PROJECT_BUTTON_MODAL, ADD_TODO_MODAL } from '../constants';
import { AddTodoModal } from '../components/Todo/AddTodoModal';

import { ActivePage } from '../redux/slice/types';

interface Props {
  activePage: ActivePage;
}

export function Page(props: Props): JSX.Element {
  const { activePage } = props;
  const { modalOpenIs } = useAppSelector((state) => state.ui);

  return (
    <Layout>
      {modalOpenIs === ADD_PROJECT_BUTTON_MODAL && <AddProjectButtonModal />}
      {modalOpenIs === ADD_TODO_MODAL && <AddTodoModal />}

      <Navbar />
      <Sidebar />

      <Content activePage={activePage} />
    </Layout>
  );
}
