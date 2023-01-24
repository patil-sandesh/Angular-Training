import {Component} from '@angular/core';
 

@Component({
    selector: 'class-bind',
    template: `hello
        <button class="btn btn-primary" [class.active]="isActive">submit</button>
        
    `,
    
})
export class ClassBindComponent {
isActive=true;
}