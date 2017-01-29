import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //add <base href="/"> to index.html
import { DemoComponent } from './demo.component';
import { DataComponent } from './data.component';
import { InteractionParentComponent } from './interaction-parent.component';
import { InteractionChildComponent } from './interaction-child.component';

const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  { path: 'demo',  component: DemoComponent },
  { path: 'data', component: DataComponent },
  { path: 'interaction', component: InteractionParentComponent },
  { path: 'child', component: InteractionChildComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
