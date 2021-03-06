import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZoomableDirective } from 'ng2-zoomable';
import { MouseWheelDirective } from './mousewheel.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoomableDirective,
    MouseWheelDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
