import { Component } from '@angular/core';
import { HeroVideoOverlayComponent } from '../hero-video-overlay/hero-video-overlay.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule, HeroVideoOverlayComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
