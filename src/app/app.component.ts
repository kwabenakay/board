import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ColumnComponent } from './components/column/column.component';
import { BoardDataService } from './service/board-data/board-data.service';
import { CommonModule } from '@angular/common';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    ColumnComponent,
    CommonModule,
    CdkDropListGroup
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private boardService = inject(BoardDataService);
  activeBoard = this.boardService.getActiveBoard();
  title = 'board';
}
