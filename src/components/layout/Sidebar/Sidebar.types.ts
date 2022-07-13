export type SidebarProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

export type SidebarContainerProps = {
  isSidebarOpen: boolean;
  initialWidth: string;
  resizeabledWidth: string;
};
