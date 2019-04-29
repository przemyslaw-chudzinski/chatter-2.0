import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import {ThemeColor} from '../../../types/theme-color.types';
import {TabContext} from '../tab-context';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterContentInit {

  @Input() theme: ThemeColor = 'primary';
  @Input() controlsTemplate: TemplateRef<TabContext>;

  @ContentChildren(TabComponent) private tabs = new QueryList<TabComponent>();
  @ViewChild('tabOutlet', {read: ViewContainerRef}) tabOutlet: ViewContainerRef;

  private currentIndex = 0;

  ngAfterContentInit(): void {
    this.tabs.length && this.tabOutlet.createEmbeddedView(this.tabs.first.template);
  }

  @HostBinding('class')
  get cssClasses() {
    switch (this.theme) {
      case 'primary': return 'theme-primary';
      case 'secondary': return 'theme-secondary';
      default: return 'theme-secondary';
    }
  }

  get tabLabels(): any[] {
    if (!this.tabs.length) {
      return [];
    }

    return this.tabs.map(({label}, index) => ({label, index}));
  }

  get getControlsCtx(): TabContext {
    return {
      $implicit: this.tabLabels,
      showTab: this.showTab.bind(this)
    };
  }

  showTab(label: any): boolean | number {
    if (!label || label.index === this.currentIndex) {
      return false;
    }

    this.tabOutlet.clear();
    this.currentIndex = label.index;
    this.tabOutlet.createEmbeddedView(this.tabs.toArray()[this.currentIndex].template);
    return this.currentIndex;
  }

}
