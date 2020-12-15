import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error6Component } from './error6.component';

describe('Error6Component', () => {
  let component: Error6Component;
  let fixture: ComponentFixture<Error6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
