import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HighlightDirective, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() title = '';

  @Output() notify = new EventEmitter<string>();
  
    sendNotification() {
      this.notify.emit('Header button clicked!');
    }

}
