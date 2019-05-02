import {Component, Input} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() hasBackdrop = true;
  @Input() backdropClass: string;

  private isOpen: boolean;
  private changed$ = new BehaviorSubject<boolean>(false);

  get opened(): boolean {
    return this.isOpen;
  }

  get changed(): Observable<boolean> {
    return this.changed$.asObservable();
  }

  open(): void {
    this.isOpen = true;
    this.changed$.next(true);
  }

  close(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isOpen = false;
    this.changed$.next(false);
  }

}
