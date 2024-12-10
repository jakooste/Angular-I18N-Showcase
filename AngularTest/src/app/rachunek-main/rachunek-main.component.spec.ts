import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RachunekMainComponent } from './rachunek-main.component';

describe('RachunekMainComponent', () => {
  let component: RachunekMainComponent;
  let fixture: ComponentFixture<RachunekMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RachunekMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RachunekMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
