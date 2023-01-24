import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MycompComponent} from './mycomp/mycomp.component';
 

@NgModule({
  declarations: [
    
    MycompComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  bootstrap: [MycompComponent] 
})
export class AppModule {}
