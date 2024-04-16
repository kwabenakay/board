import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {

}
