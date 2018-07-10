import { Component, OnInit } from '@angular/core';
import {ContextProvider} from './context-provider';

@Component({
  selector: 'app-foo',
  template: `
    <p>
      foo works!
    </p>
    <ng-content></ng-content>
  `,
  styles: [],
  providers: [ContextProvider]
})
export class FooComponent  {

  constructor(private context: ContextProvider) { }

}
