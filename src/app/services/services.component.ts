import { Component } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [UserDetailsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  userDetails: any[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log('Route Params:', params);
      const id = params['id'];
      console.log('Service ID:', id);
    });

    this.route.queryParams.subscribe(queryParams => {
      console.log('Query Params:', queryParams);
    });

    const apiUsers$ = this.userService.getUserFromApi();
    apiUsers$.subscribe((data) => {
      console.log('API Users:', data);
      this.userDetails = data;
    });
  }
}
