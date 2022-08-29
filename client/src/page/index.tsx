import { Layout } from './styled';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Content } from '../components/Content';
import { AddProjectButtonModal } from '../components/Modals/ModalsComponents/AddProjectButtonModal';
import { AddTodoModal } from '../components/Modals/ModalsComponents/AddTodoModal';

import { ActivePage } from '../redux/slice/types';

interface Props {
  activePage: ActivePage;
}

export function Page(props: Props): JSX.Element {
  const { activePage } = props;

  return (
    <Layout>
      <AddProjectButtonModal />

      <AddTodoModal />

      <Navbar />
      <Sidebar />

      <Content activePage={activePage} />
    </Layout>
  );
}
