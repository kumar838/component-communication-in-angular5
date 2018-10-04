import { Component, OnInit } from '@angular/core';
import {AgeService} from '../age.service';

@Component({
  selector: 'app-service-parent',
  templateUrl: './service-parent.component.html',
  styleUrls: ['./service-parent.component.css'],
  providers:[AgeService]
})
export class ServiceParentComponent implements OnInit {
  myAge:any;
  constructor(public ageService:AgeService) { }

  ngOnInit() {
  }

  publishAge(){

    this.ageService.changeAge(this.myAge);
  }

}
