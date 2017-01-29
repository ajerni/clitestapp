"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //OnInit Interface...
var data_service_1 = require('./data.service'); //Service injecten: Schritt 1/3
var person_module_1 = require('./person.module'); //mein Daten Model = wie die json Struktur
var common_1 = require('@angular/common'); //für die back funktion (div. Methoden für Navigation)
var router_1 = require('@angular/router');
var person_form_component_1 = require('./person-form.component'); //ist die child class! Weil im data.component.html mit <person-form></person-form> eingefügt
var DataComponent = (function () {
    function DataComponent(//Service injecten: Schritt 3/3
        dataService, location, router) {
        this.dataService = dataService;
        this.location = location;
        this.router = router;
        this.persons = []; //hier werdne die Daten gespeichert
    }
    DataComponent.prototype.ngOnInit = function () {
        this.getPersons();
        // Daten für offline Test:
        // let person1 = new Person("abc","Andi GoGo", 10);
        // let person2 = new Person("bb","GoGo Jeani", 20);
        // let hero = new Person("herosID","Super Hero", 70)
        // this.persons.push(person1);
        // this.persons.push(person2);
        // this.persons.push(hero);
    };
    DataComponent.prototype.getPersons = function () {
        var _this = this;
        this.selectedPerson = null;
        console.log('vor Abmarsch in den dataService...');
        this.dataService.getPersons()
            .subscribe(//subscribe takes 3 functions als Parameter: case success, case fail, case completed // subscriben und dann warten auf die Antwort vom Observable
        function (//subscribe takes 3 functions als Parameter: case success, case fail, case completed // subscriben und dann warten auf die Antwort vom Observable
            response) { return (_this.persons = response,
            console.log(response),
            console.log('Erster Eintrag zum check:'),
            console.log(response[0])); }, function (error) { return (console.log("Error happened: " + error)); }, function () { return (console.log('the subscription on getPersons is completed')); });
    };
    //GET
    DataComponent.prototype.refresh = function () {
        this.getPersons();
    };
    //POST moved to person-form.ts
    // create(person : Person) : void {ß
    //     this.dataService.create(person);
    // }
    //PUT
    DataComponent.prototype.update = function (person) {
        var _this = this;
        console.log('update() called in data.component.ts');
        var personUpdated = new person_module_1.Person("xy", this.formComponent.form_name, this.formComponent.form_age); //fromComponent dank ViewChild
        this.dataService.update(person, personUpdated) // person für id für die url auslesen & personUpdated für die neuen Werte
            .subscribe(//subscribe takes 3 functions als Parameter: case success, case fail, case completed // subscriben und dann warten auf die Antwort vom Observable
        function (//subscribe takes 3 functions als Parameter: case success, case fail, case completed // subscriben und dann warten auf die Antwort vom Observable
            response) { return (console.log(response)); }, function (error) { return (console.log("Error happened: " + error)); }, function () { return (_this.getPersons(), _this.selectedPerson = null,
            console.log('the subscription on update is completed')); });
    };
    //DELETE
    DataComponent.prototype.delete = function (person) {
        var _this = this;
        console.log('delete called in data.component.ts');
        this.dataService.delete(person)
            .subscribe(//subscribe takes 3 functions als Parameter: case success, case fail, case completed // subscriben und dann warten auf die Antwort vom Observable
        function (//subscribe takes 3 functions als Parameter: case success, case fail, case completed // subscriben und dann warten auf die Antwort vom Observable
            response) { return (console.log(response)); }, function (error) { return (console.log("Error happened: " + error)); }, function () { return (_this.getPersons(), _this.selectedPerson = null,
            console.log('the subscription on delete is completed')); });
    };
    DataComponent.prototype.goBack = function () {
        this.location.back(); //gibt z.B. auch die Methode forward()
    };
    DataComponent.prototype.checkArray = function () {
        for (var _i = 0, _a = this.persons; _i < _a.length; _i++) {
            var obj = _a[_i];
            console.log(obj);
        }
    };
    DataComponent.prototype.listItemClicked = function (person) {
        this.selectedPerson = person;
        // alert(this.selectedPerson.name)
    };
    __decorate([
        //...wird implementiert -> ngOnInit()
        core_1.ViewChild(person_form_component_1.PersonFormComponent), 
        __metadata('design:type', person_form_component_1.PersonFormComponent)
    ], DataComponent.prototype, "formComponent", void 0);
    DataComponent = __decorate([
        //ist die child class! Weil im data.component.html mit <person-form></person-form> eingefügt
        core_1.Component({
            moduleId: module.id,
            selector: 'data-comp',
            templateUrl: 'data.component.html',
            styleUrls: ['./data.component.css'],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, common_1.Location, router_1.Router])
    ], DataComponent);
    return DataComponent;
}());
exports.DataComponent = DataComponent;
//# sourceMappingURL=data.component.js.map