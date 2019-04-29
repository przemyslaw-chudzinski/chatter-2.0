import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTestPageComponent } from './tabs-test-page.component';

describe('TabsTestPageComponent', () => {
  let component: TabsTestPageComponent;
  let fixture: ComponentFixture<TabsTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
