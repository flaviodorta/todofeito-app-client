// Navbar component type props

export type NavbarProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

// Components of navbar types props

export interface DivWithHoverProps {
  readonly ref?:
    | React.RefObject<HTMLDivElement>
    | ((instance: HTMLDivElement | null) => void)
    | null
    | undefined;

  readonly isDivWithHoverFocus: boolean;
  readonly isInputHover: boolean;
}

export interface InputProps {
  readonly isDivWithHoverFocus: boolean;
  readonly isInputHover: boolean;
}

export interface NavIconButtonProps {}

// navbarData types

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
