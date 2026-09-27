import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task, TaskStatus } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  imports: [],
  selector: 'app-task-card',
  styleUrl: './task-card.css',
  templateUrl: './task-card.html',
})
export class TaskCard {
  @Input() task!: Task;
  @Output() statusChanged = new EventEmitter<{ task: Task, newStatus: TaskStatus }>();

  private taskService = inject(TaskService);

  onStatusChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const newStatus = select.value as TaskStatus;
    this.taskService.move(this.task.id, { status: newStatus }).subscribe(() => {
      this.statusChanged.emit({ task: this.task, newStatus });
    });
  }
}