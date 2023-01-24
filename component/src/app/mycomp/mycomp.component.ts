import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rb-mycomp',
  templateUrl: 'mycomp.component.html' 
})
export class MycompComponent {
isFavorite = false;

onClick() {
    this.isFavorite=!this.isFavorite;
}
   
}
