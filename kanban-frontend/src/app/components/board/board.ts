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
}