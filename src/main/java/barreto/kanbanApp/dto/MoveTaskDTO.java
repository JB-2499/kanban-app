package barreto.kanbanApp.dto;

import barreto.kanbanApp.model.TaskStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class MoveTaskDTO {
    @NotNull(message = "Status é obrigatório.")
    private TaskStatus status;
}