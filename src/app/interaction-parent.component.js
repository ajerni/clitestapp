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
var router_1 = require('@angular/router');
var InteractionParentComponent = (function () {
    function InteractionParentComponent(router) {
        this.router = router;
        this.parentValue = 'ich bin ein Wert aus der parent component';
    }
    InteractionParentComponent.prototype.routeToChild = function () {
        this.router.navigate(['/child']); //paths definiert in app-routing.module.ts
    };
    InteractionParentComponent.prototype.onEventReceived = function (agreed) {
        agreed ? alert('ja, agreed = true') : alert('nein, agreed = false');
    };
    InteractionParentComponent = __decorate([
        core_1.Component({
            selector: 'parent-view',
            template: "<h2>Component Interaction</h2>\n            <p>@input() - von parent zu child</p>\n            <p>@output() - von child zu parent mit EventEmiter</p>\n            <p># (local variable) - Zugriff auf child in parent template</p>\n            <p>@ViewChild - Zugriff auf child in ganzer parent component --> siehe DataComponent / update()</p>\n            <button (click)='routeToChild()'>go to Child</button>\n            <h3 style=\"color: green;\">Parent View</h3>\n\n            <p style=\"color: green;\"># (local variable) - Zugriff auf child in parent template</p>\n            <p style=\"color: blue;\">{{child.childValue}}</p> <!-- m\u00F6glich dank # / siehe interaction-child.component -->\n            <child-view #child [fromParent]='parentValue' (myEvent)='onEventReceived($event)'><child-view> <!--\n              # generiert die lokale variable child (die aber nur im parent template verwendet werden kann, //\n              nicht jedoch im parent code / wenn auch in code ben\u00F6tigt: ViewChild machen) -> siehe data.component //\n              [fromParent]='parentValue' bindet den parent value an die @Input() property fromParent in der child component //\n              (myEvent) ist der Output() Event der in der child component emitted wird und hier wird auf den Event reagiert (listen / bind to the event) //\n              -\n              #child & [fromParent]='parentValue' & (myEvent)='onEventReceived($event)' sind unabh\u00E4ngig voneinander und sind hier nur einfach in der gleichen Demo\n              -->\n\n            ",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], InteractionParentComponent);
    return InteractionParentComponent;
}());
exports.InteractionParentComponent = InteractionParentComponent;
//https://angular.io/docs/ts/latest/cookbook/component-communication.html
//# sourceMappingURL=interaction-parent.component.js.map