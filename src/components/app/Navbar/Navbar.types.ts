export type NavbarProps = {
  toggleSidebar: () => void;
};

export interface HoveredDivProps {
  readonly isInputOpen: boolean;
  readonly isInputHover: boolean;
}

export interface InputProps extends HoveredDivProps {}

export interface NavIconButtonProps {}
