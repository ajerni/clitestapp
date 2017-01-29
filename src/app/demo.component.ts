import { Component } from '@angular/core';
//import { PersonFormComponent } from './person-form.component';

@Component({
  selector: 'demo-view',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})

export class DemoComponent {
  title: string= 'Angular 2 - mit quickstart template erstellt';
  name: string= '';
  titelGeändert: boolean= false;
  datum: Date;
  alter: number = 40;
  bilder: Array<string> = ['IMG_2300.jpg', 'IMG_3414.jpg'];
  bild: string = 'IMG_2300.jpg';
  isChecked: boolean = false;

  myFunction(): void{
    if(this.titelGeändert) {
      this.title = 'Normaler Titel';
    } else {
      this.title = 'Geändert';
    }
    this.titelGeändert = !this.titelGeändert;

    this.datum = new Date();

  }

  changeImage(){
    if(this.bild=='IMG_2300.jpg'){
    this.bild = this.bilder[1];
    } else {
    this.bild = this.bilder[0];
    }
    // this.bilder.push('ich bin neu hier'); --> fügt dem Array einen Eintrag zu
    // console.log(this.bilder[2]); --> F12 im Browser zeigt Konsole
  }

  kursivCheck(): boolean{
    if(this.name=='kursiv'){
    return true;
    } else {
    return false;
    }
  }

  addOneYear(){
    this.alter += 1;
  }

}
