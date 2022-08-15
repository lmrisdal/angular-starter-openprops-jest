import { TestBed } from '@angular/core/testing'
import { ThemeSwitcherComponent } from './theme-switcher.component'

const appComponentFixture = TestBed.createComponent(ThemeSwitcherComponent)
const themeSwitcherComponent =
  appComponentFixture.debugElement.componentInstance

test('should create', () => {
  expect(themeSwitcherComponent).toBeTruthy()
})
