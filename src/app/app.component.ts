import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showGoToTopBtn = false;

  constructor() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.scrollY > window.innerHeight) {
      this.showGoToTopBtn = true;
    }
    else {
      this.showGoToTopBtn = false;
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
