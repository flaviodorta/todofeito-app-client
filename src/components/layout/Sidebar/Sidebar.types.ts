export type Props = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

export type ContainerProps = {
  isSidebarOpen: boolean;
  initialWidth: string;
  resizeabledWidth: string;
};
