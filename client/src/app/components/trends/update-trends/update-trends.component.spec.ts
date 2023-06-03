import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrendsComponent } from './update-trends.component';

describe('UpdateTrendsComponent', () => {
  let component: UpdateTrendsComponent;
  let fixture: ComponentFixture<UpdateTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
