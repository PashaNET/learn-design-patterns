import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatProgressBarModule, MatSidenavModule, MatToolbarModule, MatProgressSpinnerModule, MatIconModule} from '@angular/material';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoaderComponent } from './loader/loader.component';
import { HttpLogInterceptorService } from './http-log-interceptor.service';
import { CommunicationService } from './communication.service';
import { DragNDropComponent } from './drag-n-drop/drag-n-drop.component';

@NgModule({
  imports: [
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports: [
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  declarations: [DragNDropComponent]//modules for all mat elements which used in app
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
    NotFoundPageComponent,
    LoaderComponent,
    DragNDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [ 
    PatternService, 
    LoaderComponent, 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpLogInterceptorService, 
      multi: true 
    },
    CommunicationService],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
