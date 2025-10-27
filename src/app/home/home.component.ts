import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPipePipe } from '../custom-pipe.pipe';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HighlightDirective } from '../highlight.directive';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { interval, map } from 'rxjs';
import { UserService } from '../user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
    HighlightDirective,
    CustomPipePipe,
    RouterLink
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'angular';
  count = 0;

  username = '';

  isEvening = true;

  today = new Date();

  amount = 10000;

  numberValue = 10000.423232;

  percentValue = 0.1;

  notification = '';

  jsonObj = {
    name: 'ABC',
    course: 'HTML',
    marks: [60, 70, 80],
  };

  sliceValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  students = [
    {
      name: 'ABC',
      course: 'HTML',
    },
    {
      name: 'CDE',
      course: 'CSS',
    },
    {
      name: 'EDF',
      course: 'JS',
    },
    {
      name: 'QWQ',
      course: 'Angular',
    },
  ];

  counter$ = interval(1000).pipe(map((value) => value + 1));

  imageURL =
    'https://firebasestorage.googleapis.com/v0/b/illusbookdata.appspot.com/o/uploads%2FA%20boy%20studying%20with%20the%20laptop%20concept%20illustration%2FA%20boy%20studying%20with%20the%20laptop%20concept%20illustration.jpg?alt=media&token=28ea8c35-070d-483d-8156-5cfcb9567c27';

  userDetails: any[] = [];

  constructor(private userService: UserService, public router: Router) {
    const users = this.userService.getUser();
    const apiUsers$ = this.userService.getUserFromApi();
    apiUsers$.subscribe((data) => {
      console.log('API Users:', data);
      this.userDetails = data;
    });
    console.log('Users:', users);
  }

  buttonClick() {
    console.log('Button clicked');
    this.count++;
  }

  receiveNotification(message: string) {
    console.log('Notification from Footer:', message);
    this.notification = message;
  }

  navigateTo(){
    this.router.navigate(['/services', 101]);
  }
}
