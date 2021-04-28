import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadingComponent } from './component/loading/loading.component';
import { MainComponent } from './component/main/main.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './component/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PortfolioModule { }
