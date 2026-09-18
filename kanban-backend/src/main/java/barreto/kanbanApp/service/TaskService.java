package barreto.kanbanApp.service;

import barreto.kanbanApp.dto.MoveTaskDTO;
import barreto.kanbanApp.dto.TaskRequestDTO;
import barreto.kanbanApp.exception.ResourceNotFoundException;
import barreto.kanbanApp.model.Task;
import barreto.kanbanApp.model.TaskStatus;
import barreto.kanbanApp.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task findById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task com id " + id + " não encontrada."));
    }

    public Map<TaskStatus, List<Task>> findAll() {
        List<Task> tasks = taskRepository.findAll();
        Map<TaskStatus, List<Task>> grouped = new LinkedHashMap<>();

        for (TaskStatus status : TaskStatus.values()) {
            grouped.put(status, new ArrayList<>());
        }

        for (Task task : tasks) {
            grouped.get(task.getStatus()).add(task);
        }

        return grouped;
    }

    public Task save(TaskRequestDTO dto) {
        Task task = new Task();

        task.setStatus(dto.getStatus());
        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setPosition(0L);

        return taskRepository.save(task);
    }

    public Task update(Long id, TaskRequestDTO dto) {
        Task oldTask = findById(id);

        oldTask.setStatus(dto.getStatus());
        oldTask.setTitle(dto.getTitle());
        oldTask.setDescription(dto.getDescription());

        return taskRepository.save(oldTask);
    }

    public Task move(Long id, MoveTaskDTO dto) {
            Task task = findById(id);
            task.setStatus(dto.getStatus());
            return taskRepository.save(task);
    }

    public Task deleteById(Long id) {
        Task task = findById(id);
        taskRepository.delete(task);
        return task;
    }
}