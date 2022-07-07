export interface InitialState {
  user: User | null;
  todos: Todo[];
  projects: Project[];
}

export interface User {
  id: string;
  email: string;
  theme: string;
  photo: string;
  name: string;
  password: string;
}

export interface Todo {
  id: string;
  owner: User;
  title: string;
  content: string;
  date: Date;
  isCompleted: boolean;
  sharedUsers: boolean;
  labels: string[];
  reminder: string;
  project?: string;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  date: Date;
}

export interface Activity {
  user: User;
  content: string;
  date: Date;
}

export interface Project {
  todos: Todo[];
  owner: User;
  collaborators: User[];
  comments: Comment[];
  activity: Activity[];
}
