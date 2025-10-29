import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild('contentProject') contentProject!: ElementRef;

  @Input() title = '';

  @Output() notify = new EventEmitter<string>();

  sendNotification() {
    this.notify.emit('Header button clicked!');
  }

  ngAfterContentInit(): void {
    console.log('HeaderComponent content initialized');
    console.log(this.contentProject.nativeElement.innerText);
  }

  ngAfterContentChecked(): void {
    console.log('HeaderComponent content checked');
    console.log(this.contentProject?.nativeElement?.innerText);
  }
}
