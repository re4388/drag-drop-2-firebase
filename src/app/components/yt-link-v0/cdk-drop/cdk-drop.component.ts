
import { Component, OnInit, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-cdk-drop',
  templateUrl: './cdk-drop.component.html',
  styleUrls: ['./cdk-drop.component.css'],
})
export class CdkDropComponent implements OnInit {
  constructor() {}

  @Input() data: any;
  @Input() title: string;

  ngOnInit(): void {}

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
