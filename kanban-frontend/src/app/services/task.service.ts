import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, TaskRequest, TaskStatus, MoveTaskRequest} from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private apiUrl = 'http://localhost:8080/tasks';

    constructor(private http: HttpClient) {}

    findAll() {
        return this.http.get(this.apiUrl);
    }

    create(dto: TaskRequest) {
        return this.http.post(this.apiUrl, dto);
    }

    update(id: number, dto: TaskRequest) {
        return this.http.put(`${this.apiUrl}/${id}`, dto);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    move(id: number, dto: MoveTaskRequest) {
        return this.http.patch(`${this.apiUrl}/${id}/move`, dto);
    }
}