import { AddBlockDialogV2Component } from './../add-block-dialog-v2/add-block-dialog-v2.component';
import { AddTodoDialogV2Component } from './../add-todo-dialog-v2/add-todo-dialog-v2.component';
import {
  OnInit,
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { TodoService } from '../../services/todo.service';
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
// import {
//   getTasks,
//   addTask,
//   updateTask,
//   deleteTask,
// } from '../../actions/ToDoActions';
// import { selectTasks, selectError } from '../../reducers/ToDoReducers';

@Component({
  selector: 'app-yt-link-v2',
  templateUrl: './yt-link-v2.component.html',
  styleUrls: ['./yt-link-v2.component.css'],
})
export class YtLinkV2Component implements OnInit, OnDestroy {
  allTasks: any = [];
  todo: any = [];
  done: any = [];
  otherA: any = [];
  otherB: any = [];
  otherC: any = [];
  // myControl = new FormControl();
  filterName: string;

  // items$: any;
  // error$: any;

  afterClosedSub$: Subscription;
  alltasks$: Subscription;

  constructor(
    // private ngZone: NgZone,
    private fireStore: TodoService,
    public dialog: MatDialog // private store: Store<any>
  ) {
    // this.getTodos();
  }

  ngOnInit(): void {
    this.getTodos();
  }

  openAddTodoDialog(): void {
    const dialogRef = this.dialog.open(AddTodoDialogV2Component, {
      width: '70vw',
      data: {},
    });

    this.afterClosedSub$ = dialogRef.afterClosed().subscribe((res) => {
      this.getTodos();
    });
  }

  // openAddBlockDialog(): void {
  //   const dialogRef = this.dialog.open(AddBlockDialogV2Component, {
  //     width: '70vw',
  //     data: {},
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getTodos();
  //   });
  // }

  getTodos(): void {
    this.alltasks$ = this.fireStore.getTasks().subscribe((tasks) => {
      // console.log(`getTodos(): `, tasks);
      this.allTasks = tasks || [];

      this.todo = this.allTasks.filter((t) => t.group === `todo-group`);
      this.done = this.allTasks.filter((t) => t.group === `done-group`);
      this.otherA = this.allTasks.filter((t) => t.group === `otherA-group`);
      this.otherB = this.allTasks.filter((t) => t.group === `otherB-group`);
      this.otherC = this.allTasks.filter((t) => t.group === `otherC-group`);

      // Sort in ascending order of each list.
      this.todo.sort(this.dynamicSort('order', 'asc'));
      this.done.sort(this.dynamicSort('order', 'asc'));
      this.otherA.sort(this.dynamicSort('order', 'asc'));
      this.otherB.sort(this.dynamicSort('order', 'asc'));
      this.otherC.sort(this.dynamicSort('order', 'asc'));
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    let copyOfPrevious: any;
    let isSwapped: boolean;

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      isSwapped = false;
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      // console.log(`event =>`, event.container.element.nativeElement["ng-reflect-id"]);
      console.log(`event.container.id, TO =>`, event.container.id);

      // Reference of read only data.
      const previousOriginal = event.previousContainer.data;
      // console.log(`previousOriginal`, previousOriginal);

      // Map a new copy of event data to bring back to service.
      copyOfPrevious = previousOriginal.map((obj) => {
        const rObj: any = {};
        rObj.date = obj.date;
        rObj.done = obj.done;
        rObj.group = obj.group;
        rObj.order = obj.order;
        rObj.description = obj.description;
        rObj.url = obj.url;
        return rObj;
      });

      // If transfer, recalculate the order of previous (the copied list from drag).
      copyOfPrevious.forEach((x, index) => {
        x.order = index;
      });
      // console.log(`copyOfPrevious`, copyOfPrevious);

      isSwapped = true;
    }

    // let taskToToggle: any
    // taskToToggle = this.changeItemProp(event, isSwapped)

    // Clone event data for toggle state.
    // console.log(`event.item`, event.item.dropContainer.id);
    const toggleOfCopy = event.item.data;
    // console.log(`toggleOfCopy`, toggleOfCopy)
    const taskToToggle = { ...toggleOfCopy };

    if (isSwapped) {
      taskToToggle.group = event.container.id;
    }

    // console.log(`after swapped chcek`, taskToToggle);

    // Reference of read only data.
    const original = event.container.data;
    // console.log(`original`, original);

    // Map a new copy of event data to bring back to service.
    const copyOfOriginal = original.map((obj) => {
      const rObj: any = {};
      rObj.date = obj.date;
      rObj.order = obj.order;
      rObj.group = obj.group;
      rObj.done = obj.done;
      rObj.description = obj.description;
      rObj.url = obj.url;
      return rObj;
    });

    // Always, recalculate the order of the copied container (the list to drag).
    copyOfOriginal.forEach((x, index) => {
      x.order = index;
    });

    // Create new master list to send for update.
    let consolidatedList;
    if (copyOfPrevious) {
      consolidatedList = copyOfOriginal.concat(copyOfPrevious);
    } else {
      consolidatedList = copyOfOriginal;
    }

    // update list
    // console.log(`consolidatedList`, consolidatedList);
    this.fireStore.updateTask(taskToToggle).then((tasks) => {
      this.getTodos();
    });
  }

  moveToTrash(todo: any[], item): void {
    this.fireStore.moveToTrash(todo, item).then((done) => {
      this.getTodos();
    });
  }

  // remove(item: any[]): void {
  //   this.fireStore.deleteTask(item).then((done) => {
  //     this.getTodos();
  //   });
  // }

  dynamicSort(property: string, order: string): (a, b) => number {
    let sortOrder = 1;
    if (order === 'desc') {
      sortOrder = -1;
    }
    return (a: { [x: string]: number }, b: { [x: string]: number }) => {
      // a should come before b in the sorted order
      if (a[property] < b[property]) {
        return -1 * sortOrder;
        // a should come after b in the sorted order
      } else if (a[property] > b[property]) {
        return 1 * sortOrder;
        // a and b are the same
      } else {
        return 0 * sortOrder;
      }
    };
  }

  ngOnDestroy(): void {
    this.alltasks$.unsubscribe();
  }
}
