import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RachunekHeaderComponent } from './rachunek-header.component';

describe('RachunekHeaderComponent', () => {
  let component: RachunekHeaderComponent;
  let fixture: ComponentFixture<RachunekHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RachunekHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RachunekHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
