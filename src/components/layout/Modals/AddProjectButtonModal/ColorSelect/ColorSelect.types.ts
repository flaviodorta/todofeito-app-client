export interface Props<T> {
  setSelectColorValue: (e: any) => void;
  ref: React.RefObject<T>;
  onClick?: (e: React.MouseEvent) => void;
}

export interface ContainerProps {
  isFocus: boolean;
}
