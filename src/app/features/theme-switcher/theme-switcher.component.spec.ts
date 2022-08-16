import { TestBed } from '@angular/core/testing'
import { ThemeSwitcherComponent } from './theme-switcher.component'

const appComponentFixture = TestBed.createComponent(ThemeSwitcherComponent)
const themeSwitcherComponent =
  appComponentFixture.debugElement.componentInstance

beforeEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute('color-scheme')
})

test('should create', () => {
  expect(themeSwitcherComponent).toBeTruthy()
})

test('setTheme should update document', () => {
  expect(document.documentElement.getAttribute('color-scheme')).toBeFalsy()
  themeSwitcherComponent.setTheme({ value: 'dark' })
  expect(document.documentElement.getAttribute('color-scheme')).toBe('dark')
})
