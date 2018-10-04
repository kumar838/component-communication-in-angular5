import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localvariable-child',
  templateUrl: './localvariable-child.component.html',
  styleUrls: ['./localvariable-child.component.css']
})
export class LocalvariableChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count = 0;
 
  increment() {
     this.count++;
   }
 decrement() {
     this.count--;
 }

}
