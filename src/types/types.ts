import { DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

export type TodoType = {
  id: string;
  title: string;
  content: string;
  created: Date;
  images: string[];
  font: string;

  isCompleted: boolean;
  isShared: boolean;
};

export type InitialStateType = {
  todos: TodoType[];
};

export type AppThemeContextType = {
  toggleMode: () => void;
  mode: string;
};

export type AppThemeProviderProps = {
  children: JSX.Element;
};
