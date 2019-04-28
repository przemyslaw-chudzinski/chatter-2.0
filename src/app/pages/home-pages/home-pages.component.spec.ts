import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagesComponent } from './home-pages.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HomePagesComponent', () => {
  let component: HomePagesComponent;
  let fixture: ComponentFixture<HomePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagesComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
