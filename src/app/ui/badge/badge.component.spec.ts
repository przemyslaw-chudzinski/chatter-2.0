import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cssClasses method', () => {

    it('should return theme-secondary class when it gets null as color input property', () => {
      expect(component.cssClasses).toBe('theme-secondary');
    });

    it('should return theme-primary class when it gets primary as color input property', () => {
      component.color = 'primary';
      expect(component.cssClasses).toBe('theme-primary');
    });

  });
});
