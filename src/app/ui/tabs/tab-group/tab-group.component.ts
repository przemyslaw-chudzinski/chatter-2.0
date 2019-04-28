import {AfterContentInit, Component, ContentChildren, QueryList, ViewChild, ViewContainerRef} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterContentInit {

  @ContentChildren(TabComponent) private tabs = new QueryList<TabComponent>();
  @ViewChild('tabOutlet', {read: ViewContainerRef}) tabOutlet: ViewContainerRef;

  private currentIndex = 0;

  ngAfterContentInit(): void {
    this.tabs.length && this.tabOutlet.createEmbeddedView(this.tabs.first.template);
  }

  get tabLabels(): any[] {
    if (!this.tabs.length) {
      return [];
    }

    return this.tabs.map(({label}, index) => ({label, index}));
  }

  showTab(label: any) {
    if (!label || label.index === this.currentIndex) {
      return false;
    }

    this.tabOutlet.clear();
    this.currentIndex = label.index;
    this.tabOutlet.createEmbeddedView(this.tabs.toArray()[this.currentIndex].template);
  }

}
