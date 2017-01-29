import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/demo" routerLinkActive="active">    Demo   </a>
      <a routerLink="/data" routerLinkActive="active">    Data   </a>
      <a routerLink="/interaction" routerLinkActive="active">Interaction</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'Angular 2 Demo by Andi Erni';
}

// dieses file wird hier nur als Einstieg und für die Navigation gebraucht:
// bei <router-outlet></router-outlet> wird die component des über den routerLink
// angewählten path im app-routing.module.ts eingeblendet (gerendert)

//a.active im app.component.css file für den aktiven Link

//App startet so: main.ts -> app.module.ts -> app.component
