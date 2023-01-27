import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCatererComponent } from './create-caterer.component';

describe('CreateCatererComponent', () => {
  let component: CreateCatererComponent;
  let fixture: ComponentFixture<CreateCatererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCatererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCatererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
