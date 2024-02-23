import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';
import { MainWrapperComponentComponent } from './main-wrapper-component/main-wrapper-component.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthWrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../auth/auth.module').then((m) => m.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: MainWrapperComponentComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}
