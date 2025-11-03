import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ProductListComponent],
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



    Subjects -> rxjs -> Reactive JavaScript -> broadcast stream of data -> Observable will emit data to multiple subscribers

    subject -> emits values whenever it got subscribe
    behaviourSubject -> initial value -> current value -> it will sent to the subscriber 
    replaySubject -> collect and store some mentioned buffer of data. Once it got subscribe it will pass stored data to subscriber and then it will pass new data 



    NGRX  -> State Management library which is build on RxJS

    store -> source of app state 
    actions -> events which describes what is happening
    reducers -> update the functions for state
    selectors -> use to read the data
    effects -> handle async tasks

  */
}
