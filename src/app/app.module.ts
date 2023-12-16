import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AventureirosComponent } from './aventureiros/aventureiros.component';

@NgModule({
  declarations: [
    AppComponent,
    AventureirosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }