import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeadingCakeComponent } from './weading-cake.component';

describe('WeadingCakeComponent', () => {
  let component: WeadingCakeComponent;
  let fixture: ComponentFixture<WeadingCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeadingCakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeadingCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
