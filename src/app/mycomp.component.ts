import { Component, OnInit } from '@angular/core';
import {CourseService} from './course.service';
@Component({
  moduleId: module.id,
  selector: 'rb-mycomp',
  templateUrl: 'mycomp.component.html'
})
export class MycompComponent  {

    title: string= "the title of courses page";
    courses;
constructor(courseService:CourseService){
    this.courses=courseService.getCourses();
}

}
