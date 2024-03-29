import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Index4Component } from './index4.component';

describe('Index4Component', () => {
  let component: Index4Component;
  let fixture: ComponentFixture<Index4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Index4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
