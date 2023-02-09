import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPlansComponent } from './assign-plans.component';

describe('AssignPlansComponent', () => {
  let component: AssignPlansComponent;
  let fixture: ComponentFixture<AssignPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
