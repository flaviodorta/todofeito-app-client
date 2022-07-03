export type SidebarProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

export type AsideProps = {
  isSidebarOpen: boolean;
  initialWidth: string;
  resizeabledWidth: string;
};

export type HoveredButtonProps = {
  isProjectHover: boolean;
  isProjectButtonHover: boolean;
};
