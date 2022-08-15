import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ThemeService } from '@core/services/theme.service'

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <form id="theme-switcher" (change)="setTheme($event)">
      <div><h3>Theme switcher</h3></div>
      <div>
        <div>
          <input checked type="radio" id="auto" name="theme" value="auto" />
          <label for="auto">Auto</label>
        </div>
        <div>
          <input type="radio" id="light" name="theme" value="light" />
          <label for="light">Light</label>
        </div>
        <div>
          <input type="radio" id="dark" name="theme" value="dark" />
          <label for="dark">Dark</label>
        </div>
        <div>
          <input type="radio" id="dim" name="theme" value="dim" />
          <label for="dim">Dim</label>
        </div>
      </div>
    </form>
  `,
  styles: [
    `
      form {
        display: flex;
        height: 100vh;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 30px;
      }
      form > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      form > div > div {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    `,
  ],
})
export class ThemeSwitcherComponent {
  constructor(private themeService: ThemeService) {}
  setTheme(ev: any) {
    this.themeService.setPreference(ev.target.value)
  }
}
