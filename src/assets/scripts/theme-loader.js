/*eslint-env es2020*/

/*
  This script is used in index.html to make sure the theme is loaded before the app
  to prevent flashing between light/dark modes.
  
  Taken and modified from https://github.com/argyleink/gui-challenges/tree/main/theme-switch/public
*/

const storageKey = 'theme-preference'

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const setPreference = () => {
  console.log('setting preference to: ', theme.value)
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document.firstElementChild.setAttribute('color-scheme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}

const theme = {
  value: getColorPreference(),
}

// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference()
}

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches }) => {
    console.log('matches', matches)
    console.log('change', localStorage.getItem(storageKey))
    theme.value = getColorPreference()
    setPreference()
  })
