import { Component, input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  
})
export class Tasks {
  readonly userId = input.required<string>();
  readonly name = input.required<string>();
  isAddingTask = false;
  
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

   
  onStartAddTask() {
       this.isAddingTask = true;
  }

onCloseAddTask() {
   this.isAddingTask = false; 
  }
}