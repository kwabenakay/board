import { Component } from '@angular/core';
import { LogoComponent } from '../partial/logo/logo.component';
import { ButtonComponent } from '../partial/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
