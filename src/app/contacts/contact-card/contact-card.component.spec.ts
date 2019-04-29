import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCardComponent } from './contact-card.component';
import {UiModule} from '../../ui/ui.module';
import {By} from '@angular/platform-browser';

describe('ContactCardComponent', () => {
  let component: ContactCardComponent;
  let fixture: ComponentFixture<ContactCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCardComponent ],
      imports: [UiModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have app-avatar component when contact has avatar object ', () => {
    component.contact = {
      avatar: {url: ''}
    };
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-avatar'))).toBeTruthy();
  });

  it ('should contain span.contact-info-name with additional class has-unread-messages when contact has unreadMessagesNumber property grater than 0', () => {
    component.contact = {unreadMessagesNumber: 1};
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('span.contact-info-name.has-unread-messages'))).toBeTruthy();
  });

  it('should have app-badge element when unreadMessagesNumber is greater than 0', () => {
    component.contact = {unreadMessagesNumber: 1};
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-badge'))).toBeTruthy();
  });

  describe('hasUnreadMessages method', () => {

    it ('should return false when contact has unreadMessagesNumber equals 0', () => {
      component.contact = {unreadMessagesNumber: 0};
      expect(component.hasUnreadMessages).toBeFalsy();
    });

    it ('should return false when contact has unreadMessagesNumber equals null', () => {
      component.contact = {unreadMessagesNumber: null};
      expect(component.hasUnreadMessages).toBeFalsy();
    });

    it ('should return false when unreadMessagesNumber property doesnt exist on contact object', () => {
      component.contact = {};
      expect(component.hasUnreadMessages).toBeFalsy();
    });

    it ('should return true when contact has unreadMessagesNumber grater than 0', () => {
      component.contact = {unreadMessagesNumber: 1};
      expect(component.hasUnreadMessages).toBeTruthy();
    });

  });

});
