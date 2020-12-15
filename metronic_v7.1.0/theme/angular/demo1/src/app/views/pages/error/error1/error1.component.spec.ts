import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error1Component } from './error1.component';

describe('Error1Component', () => {
  let component: Error1Component;
  let fixture: ComponentFixture<Error1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
