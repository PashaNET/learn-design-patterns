import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatternListComponent } from './pattern-list/pattern-list.component';
import { PatternDetailsComponent } from './pattern-details/pattern-details.component';

const routes: Routes = [
  { path: '', component: PatternListComponent},
  { path: 'details/:id', component: PatternDetailsComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
