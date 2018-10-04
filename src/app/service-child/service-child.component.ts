import { Component, OnInit } from '@angular/core';
import {AgeService} from '../age.service';
@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
  styleUrls: ['./service-child.component.css']
})
export class ServiceChildComponent implements OnInit {
age;
  constructor(public ageService:AgeService) {

    ageService.event.subscribe((data)=>{

      this.age=data;
    })
   }

  ngOnInit() {
  }

}
