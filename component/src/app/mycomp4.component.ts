
import {Component} from '@angular/core';
import {CourseService} from './course.service';

@Component({
    selector:'courses4',
    moduleId: module.id,
    templateUrl: './sample.component.html'
,
providers:[CourseService]

})

export class MyComp4 {
    title: string= "the title of courses page";
    courses;
constructor(courseService:CourseService){
    this.courses=courseService.getCourses();
}
 

}