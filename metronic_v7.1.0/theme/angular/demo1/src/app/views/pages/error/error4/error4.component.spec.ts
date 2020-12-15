import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error4Component } from './error4.component';

describe('Error4Component', () => {
  let component: Error4Component;
  let fixture: ComponentFixture<Error4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
