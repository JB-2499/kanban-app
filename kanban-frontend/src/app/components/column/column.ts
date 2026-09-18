import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskCard } from '../task-card/task-card';

@Component({
  imports: [TaskCard],
  selector: 'app-column',
  styleUrl: './column.css',
  templateUrl: './column.html',
})
export class Column {
  @Input() title!: string;
  @Input() tasks!: Task[];
}