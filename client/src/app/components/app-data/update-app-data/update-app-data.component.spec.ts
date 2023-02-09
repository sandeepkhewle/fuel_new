import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppDataComponent } from './update-app-data.component';

describe('UpdateAppDataComponent', () => {
  let component: UpdateAppDataComponent;
  let fixture: ComponentFixture<UpdateAppDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
