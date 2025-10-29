import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  /*
    Lifecycle Hooks in Angular
    constructor() - Called when the component is instantiated.
    ngOnChanges() - Called when an input property changes.
    ngOnInit() - Called once the component is initialized.
    ngAfterViewInit() - Called after the component's view has been fully initialized.
    ngAfterViewChecked() - Called after the component's view has been checked by the change detection mechanism.
  ngAfterContentInit() - Called after content projected into the component has been initialized.
  ngAfterContentChecked() - Called after the projected content has been checked by the change detection mechanism.
    ngOnDestroy() - Called just before the component is destroyed.  

  */
}
