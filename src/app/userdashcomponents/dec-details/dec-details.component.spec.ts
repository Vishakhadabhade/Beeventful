import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecDetailsComponent } from './dec-details.component';

describe('DecDetailsComponent', () => {
  let component: DecDetailsComponent;
  let fixture: ComponentFixture<DecDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
