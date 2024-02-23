import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/components/layouts/layouts.module').then(
        (m) => m.LayoutsModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/components/static-pages/static.module').then(
        (m) => m.StaticModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
