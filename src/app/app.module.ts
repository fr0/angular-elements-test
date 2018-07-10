import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { FooComponent } from './foo.component';
import { BarComponent } from './bar.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FooComponent, BarComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    this.addCustomElement(FooComponent, 'custom-foo');
    this.addCustomElement(BarComponent, 'custom-bar');
  }

  private addCustomElement(type, selector) {
    const customElement = createCustomElement(type, { injector: this.injector });
    customElements.define(selector, customElement);
  }

  ngDoBootstrap() { }

}
