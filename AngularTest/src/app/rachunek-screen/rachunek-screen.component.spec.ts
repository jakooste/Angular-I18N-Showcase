import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RachunekScreenComponent } from './rachunek-screen.component';

describe('RachunekScreenComponent', () => {
  let component: RachunekScreenComponent;
  let fixture: ComponentFixture<RachunekScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RachunekScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RachunekScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
