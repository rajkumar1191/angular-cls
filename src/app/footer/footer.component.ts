import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  providers: [UserService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Output() notify = new EventEmitter<string>();

  constructor(private userService: UserService) {}

  sendNotification() {
    this.notify.emit(
      'Footer button clicked!' + this.userService.getUser().join(', ')
    );
  }
}
