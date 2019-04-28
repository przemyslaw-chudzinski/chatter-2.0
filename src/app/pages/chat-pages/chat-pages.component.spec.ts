import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPagesComponent } from './chat-pages.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ChatPagesComponent', () => {
  let component: ChatPagesComponent;
  let fixture: ComponentFixture<ChatPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPagesComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
