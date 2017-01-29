import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'add10pipe'})

export class Add10Pipe implements PipeTransform {  //Cursor in Klasse platzieren + F12 um die Deklaration zu sehen
  transform(value: number): number {
    let result = value + 10;
    return result;
  }

}

//custom pipe:
//import + add to declarations in app.module.ts
//used in data.component.html
