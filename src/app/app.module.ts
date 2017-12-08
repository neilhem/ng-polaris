import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaptionComponent } from './components/caption/caption.component';
import { ButtonComponent } from './components/button/button.component';
import { PageComponent } from './components/page/page.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DisplayTextComponent } from './components/display-text/display-text.component';


@NgModule({
  declarations: [
    AppComponent,
    CaptionComponent,
    ButtonComponent,
    PageComponent,
    PaginationComponent,
    DisplayTextComponent,
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
