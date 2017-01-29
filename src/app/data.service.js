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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http'); //in app.module.ts HttpModule importieren und in imports: auflisten! Und ev. auf enableProdMode() in main.ts
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/toPromise'); // wenn aus dem Observable ein Promis gemacht werden soll
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
//import 'rxjs/Rx'; // für alle Methoden von rxjs
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiUrl = 'https://andiapi.apispark.net/v1/persons'; // URL to web api
    } //die private Instanz http kann jetzt wie jeder andere Service verwendet werden
    //GET
    DataService.prototype.getPersons = function () {
        // ...using get request
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json(); }) //map wendet die Funktion auf jedes Element eines Iterable an
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    //POST
    DataService.prototype.create = function (person) {
        console.log('create called in data.service.ts');
        return this.http
            .post(this.apiUrl, { 'name': person.name, 'age': person.age }, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    //PUT
    DataService.prototype.update = function (person, personUpdate) {
        console.log('update called in data.service.ts');
        var url = this.apiUrl + "/" + person.id;
        return this.http.put(url, JSON.stringify(personUpdate, ['name', 'age']), { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    //DELETE
    DataService.prototype.delete = function (person) {
        console.log('delete called in data.service.ts');
        var url = this.apiUrl + "/" + person.id;
        console.log(url);
        return this.http.delete(url, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//Ein Service kann in jeder beliebigen Komponente verwendet werden (dependency injection):
//Service kreieren: @Injectable()
//Service anwenden (siehe data.component.ts):
//1. import in component und in app.module.ts
//2. add to providers: [] (in component oder für global in app.module.ts)
//3. create private instance in constructor -> siehe data.component.ts & zweite.component.ts
//# sourceMappingURL=data.service.js.map