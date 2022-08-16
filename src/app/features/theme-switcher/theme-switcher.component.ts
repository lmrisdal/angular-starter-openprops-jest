import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ThemeService } from '@core/services/theme.service'

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <form id="theme-switcher" (change)="setTheme($event.target)">
      <h3>Theme switcher:</h3>
      <div>
        <input
          checked
          type="radio"
          id="auto"
          name="theme"
          value="auto"
          [checked]="themeService.getColorPreference() === 'auto'" />
        <label for="auto"
          >Auto (switches light/dark based on OS preference)</label
        >
      </div>
      <div>
        <input
          type="radio"
          id="light"
          name="theme"
          value="light"
          [checked]="themeService.getColorPreference() === 'light'" />
        <label for="light">Light</label>
      </div>
      <div>
        <input
          type="radio"
          id="dark"
          name="theme"
          value="dark"
          [checked]="themeService.getColorPreference() === 'dark'" />
        <label for="dark">Dark</label>
      </div>
      <div>
        <input
          type="radio"
          id="dim"
          name="theme"
          value="dim"
          [checked]="themeService.getColorPreference() === 'dim'" />
        <label for="dim">Dim</label>
      </div>
      <div>
        <input
          type="radio"
          id="grape"
          name="theme"
          value="grape"
          [checked]="themeService.getColorPreference() === 'grape'" />
        <label for="grape">Grape</label>
      </div>
    </form>
  `,
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 5px;
      }
      form > div {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    `,
  ],
})
export class ThemeSwitcherComponent {
  constructor(public themeService: ThemeService) {}

  setTheme(event: any) {
    this.themeService.setPreference((event as HTMLInputElement).value)
  }
}
