import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from './shared/theme.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'static-template';

  constructor(private themeService: ThemeService) {}

  changeTheme(event: Event): void {
    const theme = (event.target as HTMLSelectElement).value;
    this.themeService.setTheme(theme);
  }
}
