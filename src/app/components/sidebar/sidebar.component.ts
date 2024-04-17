import { Component, inject } from '@angular/core';
import { BoardDataService } from '../../service/board-data/board-data.service';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private boardService = inject(BoardDataService);
  public boards = this.boardService.getAvailableBoards();
  public sidebarState = true;
  public isSidebarOn = this.boardService.getIsSidebarOn().pipe(
    tap((val) => {
      this.sidebarState = val;
    })
  );
  public toggleSidebar(): void {
    this.boardService.emitIsSidebar(!this.sidebarState)
  }
}
