import { Injectable } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  subTasks: { id: string; title: string }[];
  columnId: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  title: string;
  columns: Board[];
}

@Injectable({
  providedIn: 'root',
})
export class BoardDataService {
 
}
