import { Injectable } from '@angular/core'

/*
  This service is responsible for setting the theme of the application.
  The theme is persisted in localStorage between page refreshes.
  Update the _theme.sccs file in the assets folder to update the themes.
*/

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  storageKey = 'theme-preference'
  getColorPreference() {
    if (localStorage.getItem(this.storageKey))
      return localStorage.getItem(this.storageKey)
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  }

  setPreference(theme: string) {
    localStorage.setItem(this.storageKey, theme)
    this.reflectPreference()
  }

  reflectPreference() {
    document.documentElement.setAttribute(
      'color-scheme',
      this.getColorPreference()!
    )
  }
}
