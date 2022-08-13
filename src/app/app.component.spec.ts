import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'

const appComponentFixture = TestBed.createComponent(AppComponent)
const appComponent = appComponentFixture.debugElement.componentInstance

test('should create', () => {
  expect(appComponent).toBeTruthy()
})
