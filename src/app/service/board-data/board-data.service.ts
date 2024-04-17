import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Default {
  id: string;
  title: string;
}
export interface Task extends Default {
  subTasks?: { id: string; title: string }[];
}

export interface Column extends Default {
  tasks: Task[];
}

export interface Board extends Default {
  columns: Column[];
}

@Injectable({
  providedIn: 'root',
})
export class BoardDataService {
  private boards: Board[] = [
    {
      id: 'testboard',
      title: 'Test borad',
      columns: [
        {
          id: 'columns1',
          title: 'test column',
          tasks: [
            { id: '1', title: 'task  1' },
            { id: '2', title: 'task  2' },
            { id: '3', title: 'task  3' },
            { id: '4', title: 'task  4' },
          ],
        },
        {
          id: 'columns2',
          title: 'test column2',
          tasks: [
            { id: '5', title: 'task  5' },
            { id: '6', title: 'task  6' },
            { id: '7', title: 'task  7' },
            { id: '8', title: 'task  8' },
            { id: '9', title: 'task  9' },
            { id: '10', title: 'task  10' },
          ],
        },
      ],
    },
  ];

  private brd = new BehaviorSubject<Board>(this.boards[0]);
  private selectedBoard = this.brd.asObservable();

  private availablebrds = new BehaviorSubject<Default[]>(
    this.filterAvailableBoards()
  );
  private availableBoards = this.availablebrds.asObservable();
  private sideBarOn = new BehaviorSubject<boolean>(true);
  private isSignalOn = this.sideBarOn.asObservable();

  public selectedBoardInd = 0;

  private filterAvailableBoards(): Default[] {
    return this.boards.map((board) => ({ id: board.id, title: board.title }));
  }

  private getBoardIndex(id: string): number {
    for (const board of this.boards.entries()) {
      if (board[1].id === id) {
        return board[0];
      }
    }
    return -1;
  }

  private getColumnIndex(columnId: string, boardIndex: number): number {
    for (const column of this.boards[boardIndex].columns.entries()) {
      if (column[1].id === columnId) {
        return column[0];
      }
    }
    return -1;
  }

  private getTaskIndex(
    taskId: string,
    boardInd: number,
    columnInd: number
  ): number {
    for (const task of this.boards[boardInd].columns[
      columnInd
    ].tasks.entries()) {
      if (task[1].id === taskId) {
        return task[0];
      }
    }
    return -1;
  }

  public getActiveBoard(): Observable<Board> {
    return this.selectedBoard;
  }

  public emitSelectedBoard(boardId: string): void {
    this.brd.next(
      this.boards.filter((board, ind) => {
        this.selectedBoardInd = ind;
        return board.id === boardId;
      })[0]
    );
  }

  public getAvailableBoards(): Observable<Default[]> {
    return this.availableBoards;
  }

  public emitAvailableBoards(): void {
    this.availablebrds.next(this.filterAvailableBoards());
  }

  public getIsSidebarOn(): Observable<boolean> {
    return this.isSignalOn;
  }

  public emitIsSidebar(current: boolean):void {
    this.sideBarOn.next(current);
  }

  public moveTask(
    taskId: string,
    initialColumnId: string,
    currentColumnId: string
  ): void {
    const boardInd = this.selectedBoardInd;
    const initialColumnInd = this.getColumnIndex(initialColumnId, boardInd);
    const taskInd = this.getTaskIndex(taskId, boardInd, initialColumnInd);
    const currentColumnInd = this.getColumnIndex(currentColumnId, boardInd);
    const task = this.boards[boardInd].columns[initialColumnInd].tasks.splice(
      taskInd,
      1
    )[0];
    this.boards[boardInd].columns[currentColumnInd].tasks.push(task);
  }
}
