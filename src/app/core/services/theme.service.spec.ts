import { TestBed } from '@angular/core/testing'
import { ThemeService } from './theme.service'

let themeService: ThemeService = TestBed.inject(ThemeService)

afterEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute('color-scheme')
})

test('should create', () => {
  expect(themeService).toBeTruthy()
})

test('theme should have value', () => {
  expect(themeService.theme).toBeTruthy()
})

test('getColorPreference should return string valid theme', () => {
  expect(themeService.getColorPreference()).toMatch(/light|dark|dim|auto/)
})

test('setPreference should update localstorage', () => {
  expect(localStorage.getItem('theme-preference')).toBeFalsy()
  themeService.setPreference()
  expect(localStorage.getItem('theme-preference')).toBeTruthy()
})

test('reflectPreference should set attribute', () => {
  expect(document.documentElement.getAttribute('color-scheme')).toBeFalsy()
  themeService.reflectPreference()
  expect(document.documentElement.getAttribute('color-scheme')).toEqual(
    themeService.theme
  )
})
