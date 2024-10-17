import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeLinkElement!: HTMLLinkElement;

  constructor() {
    // this.themeLinkElement = document.createElement('link');
    // this.themeLinkElement.rel = 'stylesheet';
    // document.head.appendChild(this.themeLinkElement);
  }

  setTheme(theme: string): void {
    this.themeLinkElement.href = `${theme}.css`;
  }
}
