import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularwebshopComponent } from './angularwebshop.component';

describe('AngularwebshopComponent', () => {
  let component: AngularwebshopComponent;
  let fixture: ComponentFixture<AngularwebshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularwebshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularwebshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
