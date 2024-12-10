import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpisWydatekComponent } from './wpis-wydatek.component';

describe('WpisWydatekComponent', () => {
  let component: WpisWydatekComponent;
  let fixture: ComponentFixture<WpisWydatekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WpisWydatekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpisWydatekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
