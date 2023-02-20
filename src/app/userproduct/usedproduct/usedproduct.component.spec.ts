import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedproductComponent } from './usedproduct.component';

describe('UsedproductComponent', () => {
  let component: UsedproductComponent;
  let fixture: ComponentFixture<UsedproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
