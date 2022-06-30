export type NavbarProps = {
  toggleSidebar: () => void;
};

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
