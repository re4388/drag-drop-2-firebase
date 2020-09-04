import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoService } from '../../services/firestore-todo.service';

// import { Store } from '@ngrx/store';
// import { getTasks, addTask } from '../../actions/ToDoActions';

@Component({
  selector: 'app-add-block-dialog-v2',
  templateUrl: './add-block-dialog-v2.component.html',
  styleUrls: ['./add-block-dialog-v2.component.css'],
})
export class AddBlockDialogV2Component {

  blockData: any = {
    description: ``,
  };

  constructor(
    public dialogRef: MatDialogRef<AddBlockDialogV2Component>,
    private todoService: TodoService // private store: Store<any>
  ) {}

  doSubmit(blockForm: NgForm) {
    if (blockForm.invalid) {
      return;
    }
    console.log(`todoForm.value.url`, blockForm.value.description);
    // this.todoService
    //   .addTask(todoForm.value.description, todoForm.value.url)
    //   .then((done) => {
    //     this.dialogRef.close();
    //   });
  }
}
