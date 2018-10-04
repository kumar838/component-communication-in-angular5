import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AgeService {

public age=new Subject<String>();
public event=this.age.asObservable();

  constructor() { }

  public changeAge(data:any){
    this.age.next(data);
  }
}
