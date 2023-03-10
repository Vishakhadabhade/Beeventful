import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocListComponent } from './loc-list.component';

describe('LocListComponent', () => {
  let component: LocListComponent;
  let fixture: ComponentFixture<LocListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
