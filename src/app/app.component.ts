import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { interval, map } from 'rxjs';
import { CustomPipePipe } from './custom-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
    HighlightDirective,
    CustomPipePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';
  count = 0;

  username = '';

  isEvening = true;

  today = new Date();

  amount = 10000;

  numberValue = 10000.423232;

  percentValue = 0.1;

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

  buttonClick() {
    console.log('Button clicked');
    this.count++;
  }
}
