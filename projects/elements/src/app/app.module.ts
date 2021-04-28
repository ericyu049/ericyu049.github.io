import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { createCustomElement } from '@angular/elements';
import { PortfolioModule } from 'src/app/app.module';
import { MainComponent } from 'src/app/component/main/main.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    PortfolioModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    customElements.define('main-comp', createCustomElement(MainComponent, { injector: this.injector }));
  }
}

