package barreto.kanbanApp.repository;

import barreto.kanbanApp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}