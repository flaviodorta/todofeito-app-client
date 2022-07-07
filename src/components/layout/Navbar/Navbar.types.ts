// Navbar component type props

export type NavbarProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

// Components of navbar types props

export interface HoveredDivProps {
  readonly isHoveredDivFocus: boolean;
  readonly isInputHover: boolean;
}

export interface InputProps {
  readonly isHoveredDivFocus: boolean;
  readonly isInputHover: boolean;
}

export type HoveredButtonProps = {
  width?: string;
  height?: string;
};

// NavbarData component types

export interface IconData {
  ref: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  width: number;
  isLabelVisible: boolean;
  labelContent: string | [string, string];
}

export interface IconsData {
  [key: string]: IconData;
}

export interface NavbarDataProps2 {
  [key: string]:
    | IconsData
    | ((iconName: string) => void)
    | ((value: React.SetStateAction<string>) => void);
}

export interface NavbarDataProps {
  iconsData: IconsData;
  setIconName: (value: React.SetStateAction<string>) => void;
}
