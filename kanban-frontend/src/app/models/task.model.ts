export enum TaskStatus {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  position: number;
  createdAt: string;
  updatedAt: string;
}

export interface TaskRequest {
  title: string;
  description?: string;
  status: TaskStatus;
}

export interface MoveTaskRequest {
  status: TaskStatus;
}