import { Injectable } from '@angular/core';
import {type NewTaskData} from './task/task.model';

@Injectable({providedIn: 'root'})

export class TasksService {
  private tasks = [
    { id: 't1', userId: 'u1', title: 'Master Angular', summary: 'Learn the fundamentals of Angular', dueDate: '2026-12-31'},
    { id: 't2', userId: 'u2', title: 'Task 2', summary: 'Complete the Angular tutorial', dueDate: '2026-12-31'},
    { id: 't3', userId: 'u3 ', title: 'Task 3', summary: 'Review the Angular documentation', dueDate: '2026-12-31' }
  ];    

constructor() {
  const tasks = localStorage.getItem('tasks');
  if (tasks) {
    this.tasks = JSON.parse(tasks);
  }
}

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

    addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
    id: new Date().getTime().toString(),
    userId: userId,
    title: taskData.title,
    summary: taskData.summary,
    dueDate: taskData.dueDate
  })
}

    removeTask(taskId: string) { 
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.saveTasksToLocalStorage();
}
private saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(this.tasks));  

}
}