import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';
  count = 0;

  username = '';

  isEvening = true;

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

  imageURL =
    'https://firebasestorage.googleapis.com/v0/b/illusbookdata.appspot.com/o/uploads%2FA%20boy%20studying%20with%20the%20laptop%20concept%20illustration%2FA%20boy%20studying%20with%20the%20laptop%20concept%20illustration.jpg?alt=media&token=28ea8c35-070d-483d-8156-5cfcb9567c27';

  buttonClick() {
    console.log('Button clicked');
    this.count++;
  }
}
