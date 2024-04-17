import { Component, Input } from '@angular/core';
import { Task } from '../../service/board-data/board-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required:true}) public taskData!:Task
}
