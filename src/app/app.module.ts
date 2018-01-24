import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatProgressBarModule, MatSidenavModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { PatternDetailsComponent } from './pattern-details/pattern-details.component';
import { PatternListComponent } from './pattern-list/pattern-list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { PatternService } from './pattern.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  exports: [
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]//modules for all mat elements which used in app
})
export class DemoMaterialModule {}

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
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [PatternService],
  bootstrap: [AppComponent]
})
export class AppModule {}
