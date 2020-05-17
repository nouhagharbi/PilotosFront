import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjeuxinComponent } from './enjeuxin.component';

describe('EnjeuxinComponent', () => {
  let component: EnjeuxinComponent;
  let fixture: ComponentFixture<EnjeuxinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnjeuxinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjeuxinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
