import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss']
})
export class TabHeaderComponent {

  @Input() tabLabels: any[] = null;
  @Input() activeIndex = 0;

  @Output() labelClicked = new EventEmitter<any>();

  activeClass(index: number): {[key: string]: boolean} {
    return {
      active: index === this.activeIndex
    };
  }

}
