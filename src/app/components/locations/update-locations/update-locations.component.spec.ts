import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocationsComponent } from './update-locations.component';

describe('UpdateLocationsComponent', () => {
  let component: UpdateLocationsComponent;
  let fixture: ComponentFixture<UpdateLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
