import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks;

  constructor() {}

  getTasks() {
    let tasks = JSON.parse(window.localStorage.getItem('tasks'));
    if (tasks === null) {
      tasks = [];
    }
    console.log(`getTasks() called finished: `, tasks);
    return tasks;
  }

  addTask(addDesc: string, addItemUrl: string) {
    const tasksStored = window.localStorage.getItem('tasks');
    let tasks = [];
    if (tasksStored !== null) {
      tasks = JSON.parse(tasksStored);
    }

    // default group is 0
    const newTask: ToDo = {
      id: tasks.length + 1,
      done: false,
      group: `todo-group`,
      description: addDesc,
      url: addItemUrl,
    };

    tasks.push(newTask);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  updateTask(toggleTask, consolidatedList) {
    const taskToToggle = toggleTask;
    console.log(`toggleTask`, toggleTask);
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));

    const saved = tasks.filter((item) => {
      consolidatedList.filter((task) => {
        if (item.id === task.id) {
          if (item.id === taskToToggle.id) {
            item.group = taskToToggle.group;
          }

          item.done = taskToToggle.done;
          item.order = task.order;
          item.description = task.description;
          item.url = task.url;
          item.id = task.id;
        }
      });

      return item;
    });
    console.log(`===saved===`);
    console.table(saved);

    window.localStorage.setItem('tasks', JSON.stringify(saved));
  }

  deleteTask(deleteTask) {
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    const saved = tasks.filter((item) => {
      return item.id !== deleteTask.id;
    });
    window.localStorage.setItem('tasks', JSON.stringify(saved));
  }
}
