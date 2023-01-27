import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsListComponent } from './decorators-list.component';

describe('DecoratorsListComponent', () => {
  let component: DecoratorsListComponent;
  let fixture: ComponentFixture<DecoratorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
