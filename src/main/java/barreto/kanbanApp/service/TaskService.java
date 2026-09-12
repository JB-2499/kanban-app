package barreto.kanbanApp.service;

import barreto.kanbanApp.exception.ResourceNotFoundException;
import barreto.kanbanApp.model.Task;
import barreto.kanbanApp.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

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

    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    public Task save(Task task) {
        return taskRepository.save(task);
    }

    public Task update(Long id, Task task) {
        Task oldTask = findById(id);

        oldTask.setStatus(task.getStatus());
        oldTask.setPosition(task.getPosition());
        oldTask.setTitle(task.getTitle());
        oldTask.setDescription(task.getDescription());
        oldTask.setUpdatedAt(LocalDateTime.now());

        return taskRepository.save(oldTask);
    }

    public Task deleteById(Long id) {
        Task task = findById(id);
        taskRepository.delete(task);
        return task;
    }
}