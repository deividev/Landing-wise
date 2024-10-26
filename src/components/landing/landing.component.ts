import { ButtonModule } from 'primeng/button';
import { Component, HostListener } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ButtonModule,
    HeroSectionComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const videoContainer = document.querySelector(
      '.video-container',
    ) as HTMLElement;
    if (window.scrollY > 25) {
      videoContainer.classList.add('grow-video');
      videoContainer.classList.remove('shrink-video');
    } else {
      videoContainer.classList.add('shrink-video');
      videoContainer.classList.remove('grow-video');
    }
  }
}
