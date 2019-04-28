import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPageComponent } from './index-page.component';
import {ContactsListComponent} from '../../../contacts/contacts-list/contacts-list.component';
import {ContactsModule} from '../../../contacts/contacts.module';

describe('IndexPageComponent', () => {
  let component: IndexPageComponent;
  let fixture: ComponentFixture<IndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPageComponent ],
      imports: [ContactsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
