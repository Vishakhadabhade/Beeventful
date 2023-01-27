import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecListComponent } from './dec-list.component';

describe('DecListComponent', () => {
  let component: DecListComponent;
  let fixture: ComponentFixture<DecListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
