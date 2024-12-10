import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabWydatkiComponent } from './tab-wydatki.component';

describe('TabWydatkiComponent', () => {
  let component: TabWydatkiComponent;
  let fixture: ComponentFixture<TabWydatkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabWydatkiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabWydatkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
