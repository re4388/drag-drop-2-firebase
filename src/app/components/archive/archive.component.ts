import {
  OnInit,
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoDialogComponent } from '../../components/add-todo-dialog/add-todo-dialog.component';
import { TodoService } from '../../services/firestore-todo.service';
// import { Store, select } from '@ngrx/store';
import {
  CdkDragRelease,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent implements OnInit {
  allTasks: any = [];
  alltasks$: Subscription;
  trash: any = [];

  constructor(private fireStore: TodoService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.alltasks$ = this.fireStore.getTasks().subscribe((tasks) => {
      this.allTasks = tasks || [];
      this.trash = this.allTasks.filter((t) => t.group === `trash-group`);
    });
  }

  remove(item: any[]): void {
    this.fireStore.deleteTask(item).then((done) => {
      this.getItems();
    });
  }
}
