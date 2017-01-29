import { Component, OnInit , Input, ViewChild } from '@angular/core'; //OnInit Interface...
import { DataService } from './data.service'; //Service injecten: Schritt 1/3
import { Person }  from './person.module'; //mein Daten Model = wie die json Struktur
import { Location } from '@angular/common'; //für die back funktion (div. Methoden für Navigation)
import { Router } from '@angular/router';
import { PersonFormComponent } from './person-form.component'; //ist die child class! Weil im data.component.html mit <person-form></person-form> eingefügt


@Component({
  selector: 'data-comp',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  // providers: [ PersonFormComponent ], // Service injecten: Schritt 2/3 - DataService ist schon in app.module.ts, -> Zuriff auf person.form.component hier aber über @ViewChild
})
export class DataComponent implements OnInit { //...wird implementiert -> ngOnInit()

  @ViewChild(PersonFormComponent)                //@ViewChild gibt der parent class DataComponent Zugriff auf die properties und methoden der child class PersonFormComponent (https://angular.io/docs/ts/latest/cookbook/component-communication.html)
  private formComponent: PersonFormComponent;

  persons: Person[] = [];  //hier werdne die Daten gespeichert
  selectedPerson : Person;

  constructor(                              //Service injecten: Schritt 3/3
    private dataService: DataService,
    private location: Location,
    private router: Router,
    // private form: PersonFormComponent //generiert keine neue Instanz, sondern benutzt das "original" PersonFormComponent (d.h. direkten Zugriff auf properties und methoden)
  ) {}

  ngOnInit(): void {

    this.getPersons();

    // Daten für offline Test:
    // let person1 = new Person("abc","Andi GoGo", 10);
    // let person2 = new Person("bb","GoGo Jeani", 20);
    // let hero = new Person("herosID","Super Hero", 70)
    // this.persons.push(person1);
    // this.persons.push(person2);
    // this.persons.push(hero);
  }

  getPersons() : void {
    this.selectedPerson = null;
    console.log('vor Abmarsch in den dataService...')

    this.dataService.getPersons()
    .subscribe( //subscribe takes 3 functions als Parameter: case success, case fail, case completed // subscriben und dann warten auf die Antwort vom Observable
      response => (this.persons = response, //hier wird der response Person[] der persons property dieser Klasse zugewiesen (funktioniert nur mit arrow function, da bei Version mit function(res){..} Problem beim binden von this entstehen können)
                    console.log(response),
                    console.log('Erster Eintrag zum check:'),
                    console.log(response[0])
                  ),
      error => (console.log("Error happened: " + error)),
      () => (console.log('the subscription on getPersons is completed'))
    )
  }

  //GET
  refresh(): void{

    this.getPersons();
  }

  //POST moved to person-form.ts
  // create(person : Person) : void {ß
  //     this.dataService.create(person);
  // }

  //PUT
  update(person : Person) : void {
    console.log('update() called in data.component.ts');
    let personUpdated = new Person("xy", this.formComponent.form_name, this.formComponent.form_age); //fromComponent dank ViewChild
    this.dataService.update(person, personUpdated) // person für id für die url auslesen & personUpdated für die neuen Werte
    .subscribe( //subscribe takes 3 functions als Parameter: case success, case fail, case completed // subscriben und dann warten auf die Antwort vom Observable
      response => ( console.log(response)),
      error => (console.log("Error happened: " + error)),
      () => (this.getPersons(), this.selectedPerson = null, // macht den refresh und setzt selectedPerson auf null
      console.log('the subscription on update is completed'))
    )
  }

  //DELETE
  delete(person : Person) : void {
      console.log('delete called in data.component.ts');
      this.dataService.delete(person)
      .subscribe( //subscribe takes 3 functions als Parameter: case success, case fail, case completed // subscriben und dann warten auf die Antwort vom Observable
        response => ( console.log(response)),
        error => (console.log("Error happened: " + error)),
        () => (this.getPersons(), this.selectedPerson = null, // macht den refresh und setzt selectedPerson auf null
        console.log('the subscription on delete is completed'))
      )
  }

  goBack(): void {
    this.location.back(); //gibt z.B. auch die Methode forward()
  }

  checkArray(): void {
  for (let obj of this.persons) {  // for (let obj in this.persons) gäbe den index/key statt des values (wie hier mit of)
    console.log(obj);
    }
  }

  listItemClicked(person : Person) : void {
    this.selectedPerson = person;
    // alert(this.selectedPerson.name)
  }


}
