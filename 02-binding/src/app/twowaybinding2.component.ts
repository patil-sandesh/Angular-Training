import {Component} from '@angular/core';
 

@Component({
    selector: 'two-way',
    template: `
       <input type="text" [(ngModel)] ="title"/>  
        <input type="text" bindon-ngModel="title"/> 
    Preview : {{title}}
    <input type="button" (click)="title = ''" value="clear"/>
    `,
    
})
export class TwoWayBind2Component {
title="Angular App";
}