import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDecoratorsComponent } from './create-decorators.component';

describe('CreateDecoratorsComponent', () => {
  let component: CreateDecoratorsComponent;
  let fixture: ComponentFixture<CreateDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDecoratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
