import { Injectable } from '@angular/core';
import { ToDo } from '../models/firebaseTodo.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';


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
      map( actions =>
        actions.map((a) => {
          const data = a.payload.doc.data() as ToDo;
          const id = a.payload.doc.id;
          // console.log(id);
          return { id, ...data };
        })
      ),
      tap(console.log),
      // take(1)
    );
  }

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

  updateTask(toggleTask, consolidatedList) {
    const taskToToggle = toggleTask;
    console.log(`toggleTask`, toggleTask);
    return this.savedCollection
      .doc(toggleTask.id)
      .set({ group: taskToToggle.group }, { merge: true });
  }

  deleteTask(data) {
    console.log(data);
    console.log(data[0].id);
    return this.savedCollection.doc(data[0].id).delete();
  }
}
