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
var InteractionChildComponent = (function () {
    function InteractionChildComponent(router) {
        this.router = router;
        this.childValue = 'ich bin ein Wert aus der child component';
        this.myEvent = new core_1.EventEmitter(); //myEvent ist eine Output() property an die in der parent component gebunden werden kann
    }
    InteractionChildComponent.prototype.clickedTrueFalse = function (agreed) {
        this.myEvent.emit(agreed); //child emits the event and parent listens/binds to it
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InteractionChildComponent.prototype, "fromParent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], InteractionChildComponent.prototype, "myEvent", void 0);
    InteractionChildComponent = __decorate([
        core_1.Component({
            selector: 'child-view',
            template: "<h3 style=\"color: blue;\">Child View</h3>\n            <p style=\"color: green;\">{{fromParent}}, <span style=\"color: blue;\">der \u00FCber @Input() in der child component verwendet wurde.</span></p>\n            <p style=\"color: blue\">Die Buttons sind in der Child component / <span style=\"color: green;\">Die Antwort kommt \u00FCber den (myEvent) aus der Parent component</span></p>\n            <button (click)='clickedTrueFalse(true)'>true</button> <button (click)='clickedTrueFalse(flase)'>false</button>\n            ",
            styles: ['button { color: blue; font-weight: normal; }']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], InteractionChildComponent);
    return InteractionChildComponent;
}());
exports.InteractionChildComponent = InteractionChildComponent;
//# sourceMappingURL=interaction-child.component.js.map