import { Component, OnInit, inject } from '@angular/core';
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

  todoTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  doneTasks: Task[] = [];

  ngOnInit() {
    this.taskService.findAll().subscribe((data: any) => {
      this.todoTasks = data['TO_DO'] ?? [];
      this.inProgressTasks = data['IN_PROGRESS'] ?? [];
      this.doneTasks = data['DONE'] ?? [];
    });
  }
} 