import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
// import { Store } from '@ngrx/store';
import { TodoService } from '../../services/todo.service';
// import { getTasks, addTask } from '../../actions/ToDoActions';
@Component({
  selector: 'app-add-todo-dialog-v2',
  templateUrl: './add-todo-dialog-v2.component.html',
  styleUrls: ['./add-todo-dialog-v2.component.css']
})
export class AddTodoDialogV2Component{
  todoData: any = {
    description: ``,
    url: ``,
  };

  constructor(
    public dialogRef: MatDialogRef<AddTodoDialogV2Component>,
    private todoService: TodoService // private store: Store<any>
  ) {}

  doSubmit(todoForm: NgForm): void {
    if (todoForm.invalid) {
      return;
    }

    console.log(`todoForm.value.url`, todoForm.value.url);
    this.todoService.addTask(todoForm.value.description, todoForm.value.url);
    this.dialogRef.close();
  }

  // getTodos() {
  //   this.todoService.getTasks().subscribe(() => {
  //     console.log('get tasks');
  //   });
  // }
}

