import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {PropComponent} from './propbind.component';
 import {ClassBindComponent} from './classbind.component';
 import {StyleBindComponent} from './stylebind.component';
 import {EventBindComponent} from './eventbind.component';
  import {MyCust} from './ngcontnt.component';
    import {EventBind2Component} from './eventbind2.component';

  import {TwoWayBindComponent} from './twowaybinding.component';
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    
    AppComponent,
    PropComponent,
    ClassBindComponent,
    StyleBindComponent,
    EventBindComponent,
    EventBind2Component,
    TwoWayBindComponent,
    MyCust
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  bootstrap: [AppComponent],
  providers:[]
})
export class AppModule {}
