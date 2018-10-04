import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalvariableChildComponent } from './localvariable-child.component';

describe('LocalvariableChildComponent', () => {
  let component: LocalvariableChildComponent;
  let fixture: ComponentFixture<LocalvariableChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalvariableChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalvariableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
