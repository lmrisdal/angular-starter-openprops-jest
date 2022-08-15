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

test('getColorPreference should return string valid theme', () => {
  expect(themeService.getColorPreference()).toMatch(/light|dark|dim|auto/)
})

test('getColorPreference should return from local storage if exists', () => {
  localStorage.setItem('theme-preference', 'dark')
  expect(themeService.getColorPreference()).toMatch(/dark/)
})

test('setPreference should update localstorage', () => {
  expect(localStorage.getItem('theme-preference')).toBeFalsy()
  themeService.setPreference('dark')
  expect(localStorage.getItem('theme-preference')).toBeTruthy()
})

test('reflectPreference should set attribute', () => {
  expect(document.documentElement.getAttribute('color-scheme')).toBeFalsy()
  themeService.reflectPreference()
  expect(document.documentElement.getAttribute('color-scheme')).toEqual(
    themeService.getColorPreference()
  )
})
