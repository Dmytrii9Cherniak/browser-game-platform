import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { MainWrapperComponentComponent } from './main-wrapper-component/main-wrapper-component.component';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';

@NgModule({
  declarations: [MainWrapperComponentComponent, AuthWrapperComponent],
  imports: [CommonModule, LayoutsRoutingModule]
})
export class LayoutsModule {}
