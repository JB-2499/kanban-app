import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task, TaskStatus } from '../../models/task.model';
import { Column } from '../column/column';

@Component({
  imports: [Column],
  selector: 'app-board',
  styleUrl: './board.css',
  templateUrl: './board.html',
})
export class Board implements OnInit {
  private taskService = inject(TaskService);
  private cdr = inject(ChangeDetectorRef);

  todoTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  doneTasks: Task[] = [];
  protected readonly TaskStatus = TaskStatus;

  ngOnInit() {
    console.log('ngOnInit chamado');
    this.taskService.findAll().subscribe((data: any) => {
      console.log('dados recebidos:', data);
      this.todoTasks = data['TO_DO'] ?? [];
      this.inProgressTasks = data['IN_PROGRESS'] ?? [];
      this.doneTasks = data['DONE'] ?? [];
      this.cdr.detectChanges();
    });
  }

  onStatusChanged(event: { task: Task, newStatus: TaskStatus }) {
    this.todoTasks = this.todoTasks.filter(t => t.id !== event.task.id);
    this.inProgressTasks = this.inProgressTasks.filter(t => t.id !== event.task.id);
    this.doneTasks = this.doneTasks.filter(t => t.id !== event.task.id);

    const updatedTask = { ...event.task, status: event.newStatus };
    if (event.newStatus === TaskStatus.TO_DO) this.todoTasks.push(updatedTask);
    if (event.newStatus === TaskStatus.IN_PROGRESS) this.inProgressTasks.push(updatedTask);
    if (event.newStatus === TaskStatus.DONE) this.doneTasks.push(updatedTask);
  }
}