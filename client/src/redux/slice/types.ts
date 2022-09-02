// import { PersistPartial } from 'redux-persist/es/persistReducer';

export type userId = string;
export type todoId = string;
export type projectId = string;
export type commentId = string;
export type activityId = string;

export type ActivePage = 'inbox' | 'today' | 'upcoming';

export type ModalShow = 'none' | 'add-project-button-modal' | 'add-todo-modal';

// export interface RootState {
//   user: UserState & PersistPartial;
//   ui: UIState & PersistPartial;
// }

export interface RootState {
  user: UserState;
  ui: UIState;
}

export interface UserState {
  userId: string;
  todos: Todo[];
  projects: Project[];
  labels: Label[];
}

export interface UIState {
  activePageIs: ActivePage;
  shouldShowSelectColor: boolean;
  shouldShowSidebar: boolean;
  shouldShowAddTodoItem: boolean;
  shouldShowAddTodoItemModal: boolean;
  shouldShowAddProjectModal: boolean;
  shouldShowEditTodoItem: boolean;
}

export interface Label {
  labelId: string;
  todos: Todo[];
}

export interface User {
  userId: string;
  email: string;
  password: string;
  name?: string;
  lastName?: string;
  photo?: string;
  todos: Todo[];
}

export interface Todo {
  todoId: string;
  createdBy?: userId;
  createAt?: Date;
  title: string;
  description?: string;
  isCompleted?: boolean;
  toBeCompletedAt?: Date;
  comments?: Comment[];
  priority?: 1 | 2 | 3 | 4;
  sharingUsers?: userId[];
  labels?: string[];
  reminder?: Date;
  projectName?: string;
}

export interface Project {
  projectId: string;
  createdBy: userId;
  name: string;
  todos?: todoId[];
  sharingUsers?: userId[];
  comments?: Comment[];
  activities?: Activity[];
}

export interface Comment {
  commentId: string;
  createdBy: userId;
  content: string;
  date: Date;
}

export interface Activity {
  activityId: string;
  createdBy: userId;
  content: string;
  date: Date;
}
