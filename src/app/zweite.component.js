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
var ZweiteComponent = (function () {
    function ZweiteComponent(router) {
        this.router = router;
    }
    ZweiteComponent.prototype.routeToData = function () {
        this.router.navigate(['/data']); //paths definiert in app-routing.module.ts
    };
    ZweiteComponent = __decorate([
        core_1.Component({
            selector: 'zweite-view',
            template: "<h3>Ich bin die ZweiteComponent</h3>\n            <button (click)='routeToData()'>routeToData</button>\n            <br>\n            ",
            styles: ['button { display: inline-block; margin-left: 60px;}', 'h3 { display: inline-block;}']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ZweiteComponent);
    return ZweiteComponent;
}());
exports.ZweiteComponent = ZweiteComponent;
//dort wo eingefügt werden soll: selector im html eintragen + im app.module.ts importieren und in den declarations eintragen
//directives: [ZweiteComponent] braucht es im demo.component.ts nicht (und auch keinen import), da global in app.module.ts registriert
//# sourceMappingURL=zweite.component.js.map