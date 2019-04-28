import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupComponent } from './tab-group.component';
import {TabHeaderComponent} from '../tab-header/tab-header.component';
import {By} from '@angular/platform-browser';

describe('TabGroupComponent', () => {
  let component: TabGroupComponent;
  let fixture: ComponentFixture<TabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGroupComponent, TabHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have app-tab-header when tabs is greater than 0', () => {
    Object.defineProperty(component, 'tabLabels', {
      get(): any[] {
        return [{label:'test 1', index: 1}, {label: 'test 2', index: 2}];
      }
    });
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-tab-header'))).toBeTruthy();
  });

  describe('tabLabels method', () => {
    it('should return empty array when tabs member equals null', () => {
      expect(component.tabLabels.length).toBeFalsy();
    });
  });

  describe('showTab method', () => {
    it('should return false when label index is equal currentIndex', () => {
      component['currentIndex'] = 1;
      expect(component.showTab({index: 1})).toBeFalsy();
    });
  });

});
