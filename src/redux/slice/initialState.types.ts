export type userId = string;
export type todoId = string;
export type projectId = string;
export type commentId = string;
export type activityId = string;

export interface InitialState {
  user: IsUser | null;
  todos: IsTodo[];
  projects: IsProject[];
  isModalOpen: boolean;
  modal: string;
  isSelectOpen: boolean;
}

export interface IsUser {
  userId: string;
  email: string;
  password: string;
  name?: string;
  lastName?: string;
  photo?: string;
}

export interface IsTodo {
  todoId: string;
  createdBy: userId;
  name: string;
  content: string;
  date: Date;
  isCompleted: boolean;
  comments?: IsComment[];
  priority?: 1 | 2 | 3 | 4;
  sharingUsers?: userId[];
  labels?: string[];
  reminder?: Date;
  project?: projectId;
}

export interface IsProject {
  projectId: string;
  createdBy: userId;
  todos?: todoId[];
  sharingUsers?: userId[];
  comments?: IsComment[];
  activities?: IsActivity[];
}

export interface IsComment {
  commentId: string;
  createdBy: userId;
  content: string;
  date: Date;
}

export interface IsActivity {
  activityId: string;
  createdBy: userId;
  content: string;
  date: Date;
}
