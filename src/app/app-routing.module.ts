import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/theme-switcher/theme-switcher.component').then(
        mod => mod.ThemeSwitcherComponent
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
