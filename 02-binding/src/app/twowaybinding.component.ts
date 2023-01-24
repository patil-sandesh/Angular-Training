import {Component} from '@angular/core';
 

@Component({
    selector: 'my-app2',
    template: `
       <input type="text" [value]="title" (input)="title= $event.target.value"/> 
    Preview : {{title}}
    <input type="button" (click)="title = ''" value="clear"/>
    `,
    
})
export class TwoWayBindComponent {
title="Angular App";
}