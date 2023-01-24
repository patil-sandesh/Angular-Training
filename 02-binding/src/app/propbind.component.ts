import {Component} from '@angular/core';
 

@Component({
    selector: 'prop-bind',
    template: `
        <h1>{{ title }}</h1>
       <img src="{{imageurl}}" />
         <img [src]="imageurl" />
          <img bind-src="imageurl" />
        
    `,
    
})
export class PropComponent {
title="Angular App";
imageurl="http://lorempixel.com/400/200/";
}