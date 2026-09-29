import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task, TaskStatus } from '../../models/task.model';
import { TaskCard } from '../task-card/task-card';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { CdkDropList, CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  imports: [TaskCard, FormsModule, CdkDropList, CdkDrag],
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
  @Output() taskStatusChanged = new EventEmitter<{ task: Task, newStatus: TaskStatus }>();

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

  onStatusChanged(event: { task: Task, newStatus: TaskStatus }) {
    this.tasks = this.tasks.filter(t => t.id !== event.task.id);
    this.taskStatusChanged.emit(event);
  }
}