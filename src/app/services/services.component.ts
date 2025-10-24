import { Component } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [UserDetailsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  userDetails: any[] = [];

  constructor(private userService: UserService) {
    const apiUsers$ = this.userService.getUserFromApi();
    apiUsers$.subscribe((data) => {
      console.log('API Users:', data);
      this.userDetails = data;
    });
  }
}
