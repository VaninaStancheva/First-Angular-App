import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from "../dummy-tasks";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type Task } from "./task/task.model";


@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})

export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  tasks = dummyTasks;
  newTaskId = '';

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask() {
    const newTask: Task = {
      id: '10',
      userId: this.userId,
      title: 'Prepare issue template',
      summary:
      'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    };
    this.newTaskId = this.userId;
    this.isAddingTask = true;
    this.tasks.push(newTask)
  }   
}