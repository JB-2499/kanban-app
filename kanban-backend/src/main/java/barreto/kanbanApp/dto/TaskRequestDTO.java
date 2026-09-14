package barreto.kanbanApp.dto;

import barreto.kanbanApp.model.TaskStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class TaskRequestDTO {

    @Size(max=100)
    @NotBlank(message="O título é obrigatório.")
    private String title;

    private String description;

    @NotNull(message="Status é obrigatório.")
    private TaskStatus status;
}