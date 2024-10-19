import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { languages } from './datai18n';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'static-template';

  languages = languages;

  constructor(public translationService: TranslateService) {
    translationService.setDefaultLang('es');
  }

  changeLang(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.translationService.use(target.value);
  }
}
