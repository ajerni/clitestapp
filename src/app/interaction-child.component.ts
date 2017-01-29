import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'child-view',
  template: `<h3 style="color: blue;">Child View</h3>
            <p style="color: green;">{{fromParent}}, <span style="color: blue;">der über @Input() in der child component verwendet wurde.</span></p>
            <p style="color: blue">Die Buttons sind in der Child component / <span style="color: green;">Die Antwort kommt über den (myEvent) aus der Parent component</span></p>
            <button (click)='clickedTrueFalse(true)'>true</button> <button (click)='clickedTrueFalse(flase)'>false</button>
            `,
  styles: ['button { color: blue; font-weight: normal; }']
})

export class InteractionChildComponent  {

  constructor(private router : Router){}

  childValue : string = 'ich bin ein Wert aus der child component'

  @Input() fromParent : string;

  @Output() myEvent = new EventEmitter<boolean>(); //myEvent ist eine Output() property an die in der parent component gebunden werden kann

  clickedTrueFalse(agreed : boolean) : void {
    this.myEvent.emit(agreed); //child emits the event and parent listens/binds to it
  }
}
