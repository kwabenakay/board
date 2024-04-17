import { Component, inject } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
  BoardDataService,
  Column,
  Task,
} from '../../service/board-data/board-data.service';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [
    TaskComponent,
    CdkDropList,
    CdkDrag,
    CommonModule,
    CdkDropListGroup,
  ],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css',
})
export class ColumnComponent {
  private boardData = inject(BoardDataService);
  public activeBoard = this.boardData.getActiveBoard();

  handleDrop(event: CdkDragDrop<Column, Column, Task>) {
    const taskId = event.item.data.id;
    const prevColId = event.previousContainer.data.id;
    const currColId = event.container.data.id;
    this.boardData.moveTask(taskId,prevColId,currColId);
  }
}
