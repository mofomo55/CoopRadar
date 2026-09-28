import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { BottomNavComponent } from './shared/components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BottomNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isBrowser || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const isCompact = window.scrollY > 30;
    document.body.classList.toggle('page-header-compact', isCompact);
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }
}
