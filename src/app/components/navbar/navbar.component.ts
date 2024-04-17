import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LogoComponent } from '../partial/logo/logo.component';
import { ButtonComponent } from '../partial/button/button.component';
import { BoardDataService } from '../../service/board-data/board-data.service';
import { Destroyer } from '../../utils/destroyer.util';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent extends Destroyer implements OnInit, OnDestroy {
  private boardService = inject(BoardDataService);
  public isSidebarOn = true;
  ngOnInit(): void {
    this.addSub(
      this.boardService.getIsSidebarOn().subscribe((val) => {
        this.isSidebarOn = val;
      })
    );
  }

  ngOnDestroy(): void {
    this.destroySubs()
  }
}
