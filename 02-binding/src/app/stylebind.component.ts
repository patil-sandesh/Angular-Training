import {Component} from '@angular/core';
 

@Component({
    selector: 'style-bind',
    template: `
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'grey' ">submit</button>
        
    `,
    
})
export class StyleBindComponent {
isActive=true;
}