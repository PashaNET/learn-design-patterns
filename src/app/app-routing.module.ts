import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatternListComponent } from './pattern-list/pattern-list.component';
import { PatternDetailsComponent } from './pattern-details/pattern-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: PatternListComponent },
  { path: 'details/:id', component: PatternDetailsComponent },
  { path: 'test/:id', component: PatternDetailsComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
