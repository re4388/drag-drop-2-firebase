import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
// import { Store } from '@ngrx/store';
import { TodoService } from '../../services/todo.service';
// import { getTasks, addTask } from '../../actions/ToDoActions';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.css'],
})
export class AddTodoDialogComponent {
  todoData: any = {};

  constructor(
    public dialogRef: MatDialogRef<AddTodoDialogComponent>,
    private todoService: TodoService,
    // private store: Store<any>
  ) {}

  save(todoForm: NgForm): void {
    if (todoForm.invalid) {
      return;
    }
    this.todoService.addTask(todoForm.value.description);
    this.dialogRef.close();
  }

  // getTodos() {
  //   this.todoService.getTasks().subscribe(() => {
  //     console.log('get tasks');
  //   });
  // }
}
