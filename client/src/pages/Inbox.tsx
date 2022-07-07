import { Fragment } from 'react';
import { BasePage } from './base-page/BasePage.component';

export function Inbox(): JSX.Element {
  const activePage = 'inbox';

  return (
    <Fragment>
      <BasePage activePage={activePage} />
    </Fragment>
  );
}
