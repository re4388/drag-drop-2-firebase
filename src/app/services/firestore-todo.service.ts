import { Injectable } from '@angular/core';
import { ToDo } from '../models/firebaseTodo.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take, tap, share } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private afs: AngularFirestore) {}

  collectionName = `ToWatchCollection`;
  private savedCollection: AngularFirestoreCollection<any>;

  getTasks() {
    this.savedCollection = this.afs.collection<ToDo>(this.collectionName);
    return this.savedCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as ToDo;
          const id = a.payload.doc.id;
          // console.log(id);
          return { id, ...data };
        })
      ),
      // tap(console.log),
      share()
      // take(1)
    );
  }

  // getTrashGroup() {
  //   return this.afs
  //     .collection(this.collectionName, (ref) =>
  //       // userUid in document field need match to localStorage uid
  //       ref
  //         .where('group', '==', 'trash-group')
  //         // .orderBy('dateSelected', 'desc')
  //     )
  //     .snapshotChanges();

  // }

  addTask(description: string, url: string) {
    const date = new Date();
    // default group is `todo-group`
    const newTask: ToDo = {
      date,
      done: false,
      group: `todo-group`,
      description,
      url,
    };

    return this.savedCollection.add(newTask);
  }

  updateTask(toggleTask) {
    const taskToToggle = toggleTask;
    console.log(`toggleTask`, toggleTask);
    return this.savedCollection
      .doc(toggleTask.id)
      .set({ group: taskToToggle.group }, { merge: true });
  }

  deleteTask(data, item) {
    // console.log(data);
    // console.log(item.id);
    return this.savedCollection.doc(item.id).delete();
  }

  restore(data, item) {
    // console.log(data);
    // console.log(item.id);
    return this.savedCollection
      .doc(item.id)
      .set({ group: 'todo-group' }, { merge: true });
  }

  moveToTrash(data, item) {
    // console.log('data[0].id :', data[0]);
    // console.log('item :', item);
    return this.savedCollection
      .doc(item.id)
      .set({ group: 'trash-group' }, { merge: true });
  }
}
