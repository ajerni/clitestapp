import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { DemoComponent }  from './demo.component';
import { DataComponent }  from './data.component';
import { AppRoutingModule } from './app-routing.module';
import { ZweiteComponent } from './zweite.component';
import { TrennstrichComponent } from './trennstrich.component';
import { DataService } from './data.service'; //Service injecten: Schritt 1/3
import { HttpModule } from '@angular/http';
import { Add10Pipe } from './add-10.pipe';
import { PersonFormComponent } from './person-form.component';
import { InteractionParentComponent } from './interaction-parent.component';
import { InteractionChildComponent } from './interaction-child.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DemoComponent,
    DataComponent,
    ZweiteComponent,
    TrennstrichComponent,
    Add10Pipe,
    PersonFormComponent,
    InteractionParentComponent,
    InteractionChildComponent
  ],
  providers: [ DataService ], //Service injecten: Schritt 2/3
  bootstrap: [ AppComponent ]
})
export class AppModule { }

//hier alles iportieren und deklarieren was global gebraucht wird

//somit 'directives: [XYZComponent]' nicht nötig in der Anzeigekomponente
