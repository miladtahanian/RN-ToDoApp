export interface Task {
  name: string;
  completed: boolean;
  id: number;
}

export interface Project {
  name: string;
  description: string;
  datetime: string;
  completed: boolean;
  id: number;
  tasks: Task[];
}

export interface EditedProjectData {
  name: string;
  description: string;
  datetime: string;
}
