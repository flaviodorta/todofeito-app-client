import { useState } from 'react';
import { useElementSize } from '../../hooks/useElementSize';

interface IconData {
  ref: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  width: number;
  isLabelVisible: boolean;
  labelContent: string | [string, string];
}

interface IconsData {
  [key: string]: IconData;
}

interface Return {
  iconsData: IconsData;
  setIconName: (value: React.SetStateAction<string>) => void;
}

export function NavbarData(): Return {
  const [iconName, setIconName] = useState<string>('none');

  // take size of each button
  const [sidebarIconRef, sidebarIconSize] = useElementSize();
  const [homeIconRef, homeIconSize] = useElementSize();
  const [addTodoIconRef, addTodoIconSize] = useElementSize();
  const [completedTodosIconRef, completedTodosIconSize] = useElementSize();
  const [notificationsIconRef, notificationsIconSize] = useElementSize();
  const [userIconRef, userIconSize] = useElementSize();

  // boolean to change visibility css property of label when that is open
  let isSidebarIconLabelVisible = iconName === 'sidebar';
  let isHomeIconLabelVisible = iconName === 'home';
  let isAddTodoIconLabelVisible = iconName === 'add-todo';
  let isCompletedTodosIconLabelVisible = iconName === 'completed-todos';
  let isNotificationsIconLabelVisible = iconName === 'notifications';
  let isUserIconLabelVisible = iconName === 'user';

  // content of each label
  const sidebarIconLabelContent: [string, string] = ['Close menu', 'Open menu'];
  const homeIconLabelContent = 'Go to home';
  const addTodoIconLabelContent = 'Add todo';
  const completedTodosIconLabelContent = 'Show produtictivity';
  const notificationsIconLabelContent = 'Open notifications';
  const userIconLabelContent = 'Open profile menu';

  const iconsData: IconsData = {
    sidebar: {
      ref: sidebarIconRef,
      width: sidebarIconSize.width,
      isLabelVisible: isSidebarIconLabelVisible,
      labelContent: sidebarIconLabelContent,
    },

    home: {
      ref: homeIconRef,
      width: homeIconSize.width,
      isLabelVisible: isHomeIconLabelVisible,
      labelContent: homeIconLabelContent,
    },

    addTodo: {
      ref: addTodoIconRef,
      width: addTodoIconSize.width,
      isLabelVisible: isAddTodoIconLabelVisible,
      labelContent: addTodoIconLabelContent,
    },

    completedTodos: {
      ref: completedTodosIconRef,
      width: completedTodosIconSize.width,
      isLabelVisible: isCompletedTodosIconLabelVisible,
      labelContent: completedTodosIconLabelContent,
    },

    notifications: {
      ref: notificationsIconRef,
      width: notificationsIconSize.width,
      isLabelVisible: isNotificationsIconLabelVisible,
      labelContent: notificationsIconLabelContent,
    },

    user: {
      ref: userIconRef,
      width: userIconSize.width,
      isLabelVisible: isUserIconLabelVisible,
      labelContent: userIconLabelContent,
    },
  };

  return { iconsData, setIconName };
}
