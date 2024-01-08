import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule]
})
export class HeaderComponent {

  showMobileMenu = false;

  toggleMobileMenuImg = () => this.showMobileMenu
    ? '/assets/close-menu.svg'
    : '/assets/align-justify.svg';

}
