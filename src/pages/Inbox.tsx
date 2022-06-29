import { Fragment } from 'react';
import { Layout } from '../components/layout/Layout.component';

export function Inbox(): JSX.Element {
  const activePage = 'inbox';

  return (
    <Fragment>
      <Layout activePage={activePage} />
    </Fragment>
  );
}
