import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import {IconComponent} from '../icon/icon.component';
import {By} from '@angular/platform-browser';
import {ICON_DEFINITION_STUMB_PROVIDER} from '../../../stumbs/icon-definition-stumb';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent, IconComponent ],
      providers: [ICON_DEFINITION_STUMB_PROVIDER]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have app-icon component when it gets iconName name', () => {
    component.iconName = 'any';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-icon'))).toBeTruthy();
  });

});
