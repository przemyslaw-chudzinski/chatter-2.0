import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarSectionComponent } from './topbar-section.component';

describe('TopbarSectionComponent', () => {
  let component: TopbarSectionComponent;
  let fixture: ComponentFixture<TopbarSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
