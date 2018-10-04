import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localvariable-parent',
  templateUrl: './localvariable-parent.component.html',
  styleUrls: ['./localvariable-parent.component.css']
})
export class LocalvariableParentComponent implements OnInit {

  title = 'Parent interacts with child via local variable';
  
  constructor() { }
 
  ngOnInit() {
  }

}
