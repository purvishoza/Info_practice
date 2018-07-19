import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaciComponent } from './raci.component';

describe('RaciComponent', () => {
  let component: RaciComponent;
  let fixture: ComponentFixture<RaciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
