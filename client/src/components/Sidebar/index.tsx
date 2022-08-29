import { baseTheme, breakpoints } from '../../styles/theme/theme';
import { useLayoutEffect, useRef } from 'react';
import { usePersistedState } from '../../hooks/usePersistedState';
import { useResize } from '../../hooks/useResize';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useEventListener } from '../../hooks/useEventListener';
import { useNavigate } from 'react-router-dom';
import { uiActions, useAppDispatch, useAppSelector } from '../../redux/store';

import { ProjectOption } from './Options/ProjectsOption';
import { Option } from './Options/Option';
import { Container, OptionsList, Resizer } from './styled';

import {
  InboxSolidIcon as InboxIcon,
  CalendarDayIcon as TodayIcon,
  CalendarIcon as UpcomingIcon,
  LabelIcon as FiltersAndLabelsIcon,
} from '../Icons';

export function Sidebar(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { colors } = baseTheme;
  const { shouldShowSidebar } = useAppSelector((state) => state.ui);

  const windowWidth = useWindowSize().width;
  const oldWindowWidthRef = useRef<number>();
  const breakpointMd = parseInt(breakpoints.md, 10);

  const toggleSidebar = () => dispatch(uiActions.setShouldShowSidebar());

  useLayoutEffect(() => {
    return () => {
      oldWindowWidthRef.current = windowWidth;
    };
  });

  // automaticly sidebar close when screen resize to brakpoint < lg
  useEventListener('resize', () => {
    if (windowWidth && oldWindowWidthRef.current) {
      if (
        shouldShowSidebar &&
        windowWidth < breakpointMd &&
        oldWindowWidthRef.current > breakpointMd
      ) {
        console.log('cu');
        setTimeout(toggleSidebar, 100);
      }
    }
  });

  const initialWidth = '35.1rem';
  const maxWidthRem = 50;
  const minWidthRem = 27;

  const [persistedWidth, setPersistedWidth] = usePersistedState(
    'sidebar-width',
    initialWidth
  );

  const [setRef, resizeabledWidth] = useResize(
    { direction: 'right', max: maxWidthRem * 10, min: minWidthRem * 10 },
    persistedWidth
  );

  // fix a possible bug that break the max and min value width to sidebar
  useLayoutEffect(() => {
    if (parseInt(persistedWidth, 10) > maxWidthRem) {
      setPersistedWidth(maxWidthRem + 'rem');
    }

    if (parseInt(persistedWidth) < minWidthRem) {
      setPersistedWidth(minWidthRem + 'rem');
    }
  }, [persistedWidth, setPersistedWidth]);

  useLayoutEffect(() => {
    setPersistedWidth(resizeabledWidth);
  }, [resizeabledWidth, setPersistedWidth]);

  const variants = {
    visible: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    hidden: {
      x: `-${resizeabledWidth}`,
    },
    transition: {
      type: 'tween',
      duration: 2,
      ease: 'easeOut',
    },
  };

  return (
    <Container
      ref={setRef.element}
      shouldShowSidebar={shouldShowSidebar}
      initialWidth={initialWidth}
      resizeabledWidth={persistedWidth}
      variants={variants}
      animate={shouldShowSidebar ? 'visible' : 'hidden'}
    >
      <Resizer ref={setRef.right} />
      <OptionsList>
        <Option todoCount={23} onClick={() => navigate('/inbox')}>
          <InboxIcon fill={colors.blue} />
          Inbox
        </Option>

        <Option todoCount={21} onClick={() => navigate('/today')}>
          <TodayIcon fill={colors.green} />
          Today
        </Option>

        <Option todoCount={12} onClick={() => navigate('/upcoming')}>
          <UpcomingIcon fill={colors.purple} />
          Upcoming
        </Option>

        <Option todoCount={53} onClick={() => navigate('/filter&labels')}>
          <FiltersAndLabelsIcon fill={colors.orange} />
          Filters & Labels
        </Option>

        <ProjectOption />
      </OptionsList>
    </Container>
  );
}
