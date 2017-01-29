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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var demo_component_1 = require('./demo.component');
var data_component_1 = require('./data.component');
var app_routing_module_1 = require('./app-routing.module');
var zweite_component_1 = require('./zweite.component');
var trennstrich_component_1 = require('./trennstrich.component');
var data_service_1 = require('./data.service'); //Service injecten: Schritt 1/3
var http_1 = require('@angular/http');
var add_10_pipe_1 = require('./add-10.pipe');
var person_form_component_1 = require('./person-form.component');
var interaction_parent_component_1 = require('./interaction-parent.component');
var interaction_child_component_1 = require('./interaction-child.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                demo_component_1.DemoComponent,
                data_component_1.DataComponent,
                zweite_component_1.ZweiteComponent,
                trennstrich_component_1.TrennstrichComponent,
                add_10_pipe_1.Add10Pipe,
                person_form_component_1.PersonFormComponent,
                interaction_parent_component_1.InteractionParentComponent,
                interaction_child_component_1.InteractionChildComponent
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//hier alles iportieren und deklarieren was global gebraucht wird
//somit 'directives: [XYZComponent]' nicht nötig in der Anzeigekomponente
//# sourceMappingURL=app.module.js.map