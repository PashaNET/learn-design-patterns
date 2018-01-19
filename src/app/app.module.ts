import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { PatternDetailsComponent } from './pattern-details/pattern-details.component';
import { PatternListComponent } from './pattern-list/pattern-list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideBarComponent,
    PatternDetailsComponent,
    PatternListComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
