import { Injectable } from '@angular/core'

const storageKey = 'theme-preference'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: string = this.getColorPreference()!

  getColorPreference() {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey)
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  }

  setPreference() {
    localStorage.setItem(storageKey, this.theme!)
    this.reflectPreference()
  }

  reflectPreference() {
    document.documentElement.setAttribute('color-scheme', this.theme!)
    // document
    //   .querySelector('#theme-toggle')
    //   ?.setAttribute('aria-label', this.theme!)
  }
}
