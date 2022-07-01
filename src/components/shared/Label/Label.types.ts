export interface LabelProps {
  isVisible?: boolean;
  content: string | [string, string];
  parentWidth?: number;
}

export interface DivProps {
  isVisible?: boolean;
  parentWidth?: number;
  elementWidth?: number;
}
