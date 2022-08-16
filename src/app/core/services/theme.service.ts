import { Injectable } from '@angular/core'

const storageKey = 'theme-preference'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  getColorPreference() {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey)
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  }

  setPreference(theme: string) {
    localStorage.setItem(storageKey, theme)
    this.reflectPreference()
  }

  reflectPreference() {
    document.documentElement.setAttribute(
      'color-scheme',
      this.getColorPreference()!
    )
  }
}
