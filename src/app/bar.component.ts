import { Component, OnInit } from '@angular/core';
import {ContextProvider} from './context-provider';

@Component({
  selector: 'app-bar',
  template: `
    <p>
      bar works! {{context.place}}
    </p>
  `,
  styles: []
})
export class BarComponent {

  constructor(public context: ContextProvider) { }


}
