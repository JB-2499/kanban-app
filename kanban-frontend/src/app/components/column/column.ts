import { Component, Input, inject } from '@angular/core';
import { Task, TaskStatus } from '../../models/task.model';
import { TaskCard } from '../task-card/task-card';
import { TaskService } from '../../services/task.service';

@Component({
  imports: [TaskCard],
  selector: 'app-column',
  styleUrl: './column.css',
  templateUrl: './column.html',
})
export class Column {
  private taskService = inject(TaskService);

  showForm = false;
  newTitle = '';
  newDescription = '';

  @Input() title!: string;
  @Input() tasks!: Task[];
  @Input() status!: TaskStatus;

  addTask() {
    this.taskService.create({
      title: this.newTitle,
      description: this.newDescription,
      status: this.status
    }).subscribe((newTask: any) => {
      this.tasks.push(newTask);
      this.newTitle = '';
      this.newDescription = '';
      this.showForm = false;
    });
  }
}