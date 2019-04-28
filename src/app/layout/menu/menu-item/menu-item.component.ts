import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  @Input() icon: string = null;
  @Input() badges: any[] = null;
  @Input() active: boolean;

  @Output() onClick = new EventEmitter<void>();

  get iconCssClasses() {
    const result = {
      fa: this.icon && this.icon.length
    };

    if (this.icon) {
      result['fa-' + this.icon] = true;
    }

    return result;
  }

  @HostListener('click')
  handleHostClick(): void {
    this.onClick.emit();
  }

  @HostBinding('class.active')
  get whenIsActive(): boolean {
    return this.active;
  }

}
