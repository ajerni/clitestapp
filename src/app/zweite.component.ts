import { Component, trigger, state, style, transition, animate} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'zweite-view',
  template: `<h3>Ich bin die ZweiteComponent</h3>
            <button (click)='routeToData()'>routeToData</button>
            <br>
            <ul>
              <li [@myState]='state' (mouseover)='stateToggle()'>    animated when mouseover</li>
            </ul>
            `,
  styles: ['button { display: inline-block; margin-left: 60px;}', 'h3 { display: inline-block;}', 'li {width : 200px; list-style-type: none;}'],
  animations: [
    trigger('myState', [
      state('inactive', style({
        backgroundColor: '#6fec2a',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#fa441b',
        transform: 'scale(1.3)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class ZweiteComponent  {

  constructor(private router : Router){}

  state : string = 'inactive';

  stateToggle():void{
    this.state == 'inactive' ? this.state = 'active' : this.state = 'inactive';
  }

  routeToData():void{
    this.router.navigate(['/data']); //paths definiert in app-routing.module.ts
  }

}

//dort wo eingefügt werden soll: selector im html eintragen + im app.module.ts importieren und in den declarations eintragen

//directives: [ZweiteComponent] braucht es im demo.component.ts nicht (und auch keinen import), da global in app.module.ts registriert
