import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocDetailsComponent } from './loc-details.component';

describe('LocDetailsComponent', () => {
  let component: LocDetailsComponent;
  let fixture: ComponentFixture<LocDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
