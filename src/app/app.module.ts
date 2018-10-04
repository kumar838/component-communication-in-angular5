import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router ,Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test-child/test.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TestParentComponent } from './test-parent/test-parent.component';
import { ServiceParentComponent } from './service-parent/service-parent.component';
import { ServiceChildComponent } from './service-child/service-child.component';

import {AgeService} from './age.service';
import { LocalvariableParentComponent } from './localvariable-parent/localvariable-parent.component';
import { LocalvariableChildComponent } from './localvariable-child/localvariable-child.component';
//TestParentComponent is parentComponent And TestComponent is child component


const approuting:Routes=[
  {path:"",component:AppComponent},
  {path:'ioparent',component:TestParentComponent},            //using @Input And @Output
  {path:'viewparent',component:ViewParentComponent} ,         //for @viewchild
  {path:'serviceparent',component:ServiceParentComponent},    // using service
  {path:'localparent',component:LocalvariableParentComponent} // using local variable
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ViewParentComponent,
    ViewChildComponent,
    TestParentComponent,
    ServiceParentComponent,
    ServiceChildComponent,
    LocalvariableParentComponent,
    LocalvariableChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approuting)
  ],
  providers: [AgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
