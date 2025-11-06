import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

interface Todo {
  id: number;
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './app-todo.component.html',
  styleUrl: './app-todo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTodoComponent {
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
