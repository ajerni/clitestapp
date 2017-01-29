import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Person }    from './person.module';
import { DataService } from './data.service';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
})

export class PersonFormComponent { //implements OnChanges {

  constructor(private dataService : DataService){}

  auswahl = ['default', 'egal',
            'weil Web API...', '...die ID zuteilt'];

  form_name : string; // = "Mock";  //hardecoded
  form_age : number; // = 4;

  @Input() selectedPersonFromDataComponent : Person; //funktioniert -> wert wird in dieser Demo aber nicht weiterverarbeitet:

  // ngOnChanges(changes: SimpleChanges) {     //ngOnChanges wird immer aufgerufen, wenn sich der Wert einer @Input() property ändert.
  //   this.form_name = this.selectedPersonFromDataComponent.name;
  //   this.form_age = this.selectedPersonFromDataComponent.age;
  // }  //hier aber deaktiviert, weil es in der Demo zu Cycle-Refefernces fürht


  // submitted = false;
  // onSubmit() { this.submitted = true; }

  //POST
  create(): void {
      console.log('create() called in person-form.component.ts');
      let pers = new Person("xyz", this.form_name, this.form_age);
      this.dataService.create(pers) // funktioniert auch so beim Promise / Observable braucht subscribe
      // .then(resp => ( console.log(resp)))  //Promise thein / Observable subscribe
      // .catch(error => ( console.log(error)));

  }

  // getFormName(): string{
  //   console.log(this.form_name);
  //   return this.form_name;
  // }

}
