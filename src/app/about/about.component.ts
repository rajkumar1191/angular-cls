import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {

  constructor() {
    console.log('AboutComponent constructor called');
  }

  ngOnInit() {
    console.log('AboutComponent initialized');
  }

  ngOnDestroy(){
    console.log('AboutComponent destroyed');
    // APP_ID.unsubscribe();
  }
}
