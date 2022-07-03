import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { BasePageProps } from './BasePage.types';

import { Navbar } from '../../components/layout/Navbar/Navbar.component';
import { Sidebar } from '../../components/layout/Sidebar/Sidebar.component';
import { Content } from './BasePage.styled';
import { useWindowSize } from '../../hooks/useWindowSize';
import { breakpoints } from '../../styles/theme/theme';
import { useEventListener } from '../../hooks/useEventListener';

export function BasePage(props: BasePageProps): JSX.Element {
  const windowSizeWidth = useWindowSize().width;

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((state) => !state);

  const oldWindowWidthRef = useRef<number | undefined>(undefined);

  const breakpointMd = parseInt(breakpoints.md, 10);

  useLayoutEffect(() => {
    return () => {
      console.log(oldWindowWidthRef.current, windowSizeWidth);
      oldWindowWidthRef.current = windowSizeWidth;
    };
  });

  useEventListener('resize', () => {
    if (windowSizeWidth && oldWindowWidthRef.current) {
      if (
        isSidebarOpen &&
        windowSizeWidth < breakpointMd &&
        oldWindowWidthRef.current > breakpointMd
      ) {
        setTimeout(toggleSidebar, 200);
      }
    }
  });

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Content isSidebarOpen={isSidebarOpen}></Content>
    </>
  );
}
