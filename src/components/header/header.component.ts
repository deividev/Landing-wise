import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language, languages } from '../../app/datai18n';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // languages = languages;

  constructor(public translationService: TranslateService) {
    translationService.setDefaultLang('es');
  }

  languages: Language[] = languages;

  selectedLanguage: Language = {
    name: 'Español',
    code: 'es',
  };

  changeLang(event: DropdownChangeEvent): void {
    this.translationService.use(event.value.code);
  }
}
