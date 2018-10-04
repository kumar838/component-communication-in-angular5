import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalvariableParentComponent } from './localvariable-parent.component';

describe('LocalvariableParentComponent', () => {
  let component: LocalvariableParentComponent;
  let fixture: ComponentFixture<LocalvariableParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalvariableParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalvariableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
