import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent {

  @Input() contactFilters: any[] = [
    {
      id: 1,
      text: 'All'
    },
    {
      id: 2,
      text: 'Teams'
    },
    {
      id: 3,
      text: 'Personal'
    }
  ];

  activeFilter = 1;

}
