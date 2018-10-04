import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';

import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild(ViewChildComponent)

  private childcomponent:ViewChildComponent;

  childAge: number;

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

  changeName(){
    this.childcomponent.myName="Kumar";
  }

  getchildAge(){
    this.childAge=this.childcomponent.age;
  }

}
