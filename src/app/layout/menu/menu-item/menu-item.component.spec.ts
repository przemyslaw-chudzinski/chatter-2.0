import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';
import {BadgeComponent} from '../../../ui/badge/badge.component';
import {By} from '@angular/platform-browser';
import {IconComponent} from '../../../ui/icon/icon.component';
import {ICON_DEFINITION_STUMB_PROVIDER} from '../../../../stumbs/icon-definition-stumb';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemComponent, BadgeComponent, IconComponent ],
      providers: [ICON_DEFINITION_STUMB_PROVIDER]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have Badge component when badges input property has length greater than 0', () => {
    component.badges = [{value: 1, color: 'primary'}];
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-badge'))).toBeTruthy();
  });

  it('should call handleHostClick method when host is clicked', () => {
    spyOn(component, 'handleHostClick');
    fixture.nativeElement.click();
    expect(component.handleHostClick).toHaveBeenCalled();
  });

  it('should have app-icon component whe he gets iconName property', () => {
    component.iconName = 'any';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-icon'))).toBeTruthy();
  });

  describe('whenIsActive method', () => {
    it ('should return true when component gets the active input property equals true', () => {
      component.active = true;
      expect(component.whenIsActive).toBeTruthy();
    });
  });

});
