import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app-todo.component.html',
  styleUrl: './app-todo.component.css',
})
export class AppTodoComponent {
  /*
    A Signal is a reactive value that stores data and automatically updates the UI or dependent computations when it changes.
A variable that notifies Angular whenever it changes — no more manual subscriptions, async pipes, or change detection headaches.
Traditional Angular change detection relies on Zone.js and RxJS to detect and propagate changes.
But with Signals, Angular can track exactly which part of your app depends on which data, and only update that.



Signal - Holds a reactive value
Computed Signal - Derives a new value from other signals
Effect - Runs code when dependent signals change


    */

  // count = signal<number>(0);

  /*
  signal()
    Declares a reactive variable.
    You read a signal using () (like a function call).
    You write to a signal using:
    set(value) → Replace the current value.
    update(fn) → Update based on previous value.
  */

  // doubleCount = computed(() => this.count() * 2);

  /*
    computed()
      Creates a derived signal.
      Automatically recalculates when any dependent signal changes.
      Read-only by design.
  */
  // logEffect = effect(() => {
  //   console.log(`Count changed → ${this.count()}`);
  // });

  /*
  effect()
    Runs side effects (logging, HTTP calls, DOM updates, etc.)
    Automatically re-runs when any signal it reads changes.
  */

  // increment() {
  //   this.count.update((value) => value + 1);
  // }

  // decrement() {
  //   this.count.update((value) => value - 1);
  // }

  // reset() {
  //   this.count.set(0);
  // }

  newTask = '';

  todos = signal<Todo[]>([]);

  completedCount = computed(() => this.todos().filter((t) => t.done).length);

  addTodo() {
    if (!this.newTask.trim()) return;

    this.todos.update((list) => [
      ...list,
      {
        id: Date.now(),
        name: this.newTask,
        done: false,
      },
    ]);

    this.newTask = '';
  }

  remove(id: number) {
    this.todos.update((list) => list.filter((t) => t.id != id));
  }

  toggle(id: number) {
    this.todos.update((list) =>
      list.map((t) => (t.id == id ? { ...t, done: !t.done } : t))
    );
  }
}
