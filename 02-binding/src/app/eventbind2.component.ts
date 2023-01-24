import {Component} from '@angular/core';
 

@Component({
    selector: 'event-bind2',
    template: `
    <div (click)="onDivClick1()">
    <div (click)="onDivClick()">
        <button (click)="onClick($event)"> submit</button>
       </div> 
       </div>
    `,
    
})
export class EventBind2Component {

onDivClick() {
    console.log("handled by div");
}
onDivClick1() {
    console.log("handled by div-1");
}

onClick ($event){
    
console.log("clicked", $event);


}
}