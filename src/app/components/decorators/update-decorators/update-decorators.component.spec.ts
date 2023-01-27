import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDecoratorsComponent } from './update-decorators.component';

describe('UpdateDecoratorsComponent', () => {
  let component: UpdateDecoratorsComponent;
  let fixture: ComponentFixture<UpdateDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDecoratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
