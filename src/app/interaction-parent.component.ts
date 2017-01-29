import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'parent-view',
  template: `<h2>Component Interaction</h2>
            <p>@input() - von parent zu child</p>
            <p>@output() - von child zu parent mit EventEmiter</p>
            <p># (local variable) - Zugriff auf child in parent template</p>
            <p>@ViewChild - Zugriff auf child in ganzer parent component --> siehe DataComponent / update()</p>
            <button (click)='routeToChild()'>go to Child</button>
            <h3 style="color: green;">Parent View</h3>

            <p style="color: green;"># (local variable) - Zugriff auf child in parent template</p>
            <p style="color: blue;">{{child.childValue}}</p> <!-- möglich dank # / siehe interaction-child.component -->
            <child-view #child [fromParent]='parentValue' (myEvent)='onEventReceived($event)'><child-view> <!--
              # generiert die lokale variable child (die aber nur im parent template verwendet werden kann, //
              nicht jedoch im parent code / wenn auch in code benötigt: ViewChild machen) -> siehe data.component //
              [fromParent]='parentValue' bindet den parent value an die @Input() property fromParent in der child component //
              (myEvent) ist der Output() Event der in der child component emitted wird und hier wird auf den Event reagiert (listen / bind to the event) //
              -
              #child & [fromParent]='parentValue' & (myEvent)='onEventReceived($event)' sind unabhängig voneinander und sind hier nur einfach in der gleichen Demo
              -->

            `,
})
export class InteractionParentComponent  {

  constructor(private router : Router){}

  parentValue : string = 'ich bin ein Wert aus der parent component'

  routeToChild():void{
    this.router.navigate(['/child']); //paths definiert in app-routing.module.ts
  }

  onEventReceived(agreed : boolean){
    agreed ? alert('ja, agreed = true') : alert('nein, agreed = false');
  }

}

//https://angular.io/docs/ts/latest/cookbook/component-communication.html
