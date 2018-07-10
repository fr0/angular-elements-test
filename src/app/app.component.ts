import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="dynamic"></div>
  `,
  styles: [`

  `]
})
export class AppComponent implements AfterViewInit {
  private shadow: ShadowRoot;

  constructor(private element: ElementRef) {

  }

  ngAfterViewInit() {
    const dynamic = this.element.nativeElement.querySelector('.dynamic');
    this.shadow = dynamic.attachShadow({mode: 'open'});
    this.shadow.innerHTML = `
      <custom-foo>
        <custom-bar></custom-bar>
      </custom-foo>
    `;
  }

}


