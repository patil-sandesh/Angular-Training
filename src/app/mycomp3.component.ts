
import {Component} from '@angular/core';


@Component({
    selector:'courses3',
    template: `<h1> my new comp comes as a child </h1>
    {{title}}
    <ul>
<li *ngFor=" let course of courses"> 
{{course}}
</li>
    </ul>
    `


})

export class MyComp3 {
    title: string= "the title of courses page";
    courses=["course1","course2","course3"];

}