import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Level1Component } from './level1/level1.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, Level1Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
