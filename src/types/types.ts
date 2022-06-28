import { FlattenSimpleInterpolation } from 'styled-components';

export type Todo = {
  id: string;
  title: string;
  content: string;
  created: Date;
  images: string[];
  font: string;

  isCompleted: boolean;
  isShared: boolean;
};

export type InitialState = {
  todos: Todo[];
};

export type MediaQuerie = {
  sm: (...args: string[]) => void;
  md: (...args: string[]) => FlattenSimpleInterpolation;
  lg: (...args: string[]) => FlattenSimpleInterpolation;
  xl: (...args: string[]) => FlattenSimpleInterpolation;
};
