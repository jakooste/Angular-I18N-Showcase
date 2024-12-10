import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCzlonkowieComponent } from './tab-czlonkowie.component';

describe('TabCzlonkowieComponent', () => {
  let component: TabCzlonkowieComponent;
  let fixture: ComponentFixture<TabCzlonkowieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabCzlonkowieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabCzlonkowieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
