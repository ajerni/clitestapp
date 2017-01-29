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
//import { PersonFormComponent } from './person-form.component';
var DemoComponent = (function () {
    function DemoComponent() {
        this.title = 'Angular 2 - mit quickstart template erstellt';
        this.name = '';
        this.titelGeändert = false;
        this.alter = 40;
        this.bilder = ['IMG_2300.jpg', 'IMG_3414.jpg'];
        this.bild = 'IMG_2300.jpg';
        this.isChecked = false;
    }
    DemoComponent.prototype.myFunction = function () {
        if (this.titelGeändert) {
            this.title = 'Normaler Titel';
        }
        else {
            this.title = 'Geändert';
        }
        this.titelGeändert = !this.titelGeändert;
        this.datum = new Date();
    };
    DemoComponent.prototype.changeImage = function () {
        if (this.bild == 'IMG_2300.jpg') {
            this.bild = this.bilder[1];
        }
        else {
            this.bild = this.bilder[0];
        }
        // this.bilder.push('ich bin neu hier'); --> fügt dem Array einen Eintrag zu
        // console.log(this.bilder[2]); --> F12 im Browser zeigt Konsole
    };
    DemoComponent.prototype.kursivCheck = function () {
        if (this.name == 'kursiv') {
            return true;
        }
        else {
            return false;
        }
    };
    DemoComponent.prototype.addOneYear = function () {
        this.alter += 1;
    };
    DemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'demo-view',
            templateUrl: 'demo.component.html',
            styleUrls: ['demo.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map