import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error3Component } from './error3.component';

describe('Error3Component', () => {
  let component: Error3Component;
  let fixture: ComponentFixture<Error3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
