import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CaptionComponent } from './app/components/caption/caption.component';
import { ButtonComponent } from './app/components/button/button.component';
import { PageComponent } from './app/components/page/page.component';
import { PaginationComponent } from './app/components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CaptionComponent,
    ButtonComponent,
    PageComponent,
    PaginationComponent,
  ],
  exports: [
    CaptionComponent,
    ButtonComponent,
    PageComponent,
    PaginationComponent,
  ],
})
export class PolarisModule { }
