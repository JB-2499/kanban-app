[English](#kanban-app-project)

# Kanban App
## Por: João Barreto

O Kanban App é uma aplicação web full stack para gerenciamento visual de tarefas, inspirada em ferramentas como o Trello. O sistema permite criar, editar, mover e remover tarefas entre três colunas de status: A Fazer, Em Progresso e Concluído. O projeto foi desenvolvido para consolidar conhecimentos em desenvolvimento web moderno, cobrindo o ciclo completo de uma aplicação — do banco de dados à interface do usuário, com containerização via Docker.

> Status do projeto: Em desenvolvimento.

> Versão atual: 1.0-SNAPSHOT

> Versão Java: JDK 25 | Spring Boot: 4.1.1

<br>

# ⚙️ Funcionamento

Para rodar o projeto localmente com Docker, basta clonar o repositório e executar:

```bash
git clone https://github.com/JB-2499/kanban-app
cd kanban-app
docker-compose up --build
```

A aplicação estará disponível em:
- Frontend: http://localhost:4200
- Documentação da API (Swagger): http://localhost:8080/swagger-ui.html

<br>

Caso prefira rodar sem Docker, é necessário ter PostgreSQL instalado. Crie o banco manualmente:

```sql
CREATE USER kanban_user WITH PASSWORD 'kanban_pass';
CREATE DATABASE kanban_db OWNER kanban_user;
```

Depois, inicie o backend e o frontend separadamente:

```bash
# Backend
cd backend
./mvnw spring-boot:run

# Frontend
cd frontend
npm install
ng serve
```

<br>

O sistema possui as seguintes funcionalidades:

<br>

Função | O que faz
-------|----------
Criar tarefa | Abre um formulário onde o usuário informa título e descrição. A tarefa é criada automaticamente na coluna "A Fazer".
Editar tarefa | Permite alterar o título e a descrição de uma tarefa já existente.
Mover tarefa | O usuário pode arrastar e soltar a tarefa entre as colunas "A Fazer", "Em Progresso" e "Concluído".
Excluir tarefa | Remove a tarefa permanentemente do sistema.
Listar tarefas | A tela principal exibe todas as tarefas organizadas em suas respectivas colunas.

<br>

# 🗂️ Estrutura de diretórios

```
|-- kanban-app
|   |-- backend
|   |   |-- src/main/java/barreto/kanbanApp
|   |   |   |-- model
|   |   |   |-- dto
|   |   |   |-- repository
|   |   |   |-- service
|   |   |   |-- controller
|   |   |   |-- config
|   |   |   |-- exception
|   |-- frontend
|   |   |-- src/app
|   |   |   |-- board
|   |   |   |-- column
|   |   |   |-- task-card
|   |   |   |-- services
|   |-- docker-compose.yml
```

<br>

Diretório | Função
----------|-------
backend | Contém toda a aplicação Spring Boot, responsável pela API REST e comunicação com o banco de dados.
backend/model | Entidades JPA e enums mapeados para as tabelas do banco.
backend/repository | Interfaces de acesso ao banco via Spring Data JPA.
backend/service | Camada de lógica de negócio da aplicação.
backend/controller | Endpoints REST expostos pela API.
backend/config | Configurações gerais da aplicação, como CORS.
backend/exception | Classes de exceção customizadas e handler global de erros.
frontend | Aplicação Angular responsável pela interface do usuário.
frontend/board | Componente principal que exibe o quadro Kanban com as colunas.
frontend/task-card | Componente individual de cada tarefa no board.
frontend/services | Serviços HTTP responsáveis pela comunicação com a API.

<br>

# 🌐 Endpoints da API

Método | Rota | Descrição
-------|------|----------
GET | /api/tasks | Retorna todas as tarefas agrupadas por coluna
POST | /api/tasks | Cria uma nova tarefa
PUT | /api/tasks/{id} | Atualiza título e descrição de uma tarefa
PATCH | /api/tasks/{id}/move | Move a tarefa para outra coluna
DELETE | /api/tasks/{id} | Remove uma tarefa

<br>

# 🛠️ Requisitos

Para executar o projeto, os seguintes componentes devem estar instalados:

- Java JDK 25 ou superior
- Node.js 18 ou superior
- Angular CLI 17 ou superior
- Docker e Docker Compose (para execução containerizada)
- PostgreSQL 16 (para execução local sem Docker)

<br>

# 💾 Melhorias planejadas para versões futuras

- Implementação de autenticação de usuários com Spring Security e JWT.
- Suporte a múltiplos quadros Kanban por usuário.
- Adição de comentários e anexos nas tarefas.
- Filtros e busca por título ou status.
- Deploy em nuvem.

<br><br>

[Português](#kanban-app)

# Kanban App Project
## By: João Barreto

Kanban App is a full stack web application for visual task management, inspired by tools like Trello. The system allows users to create, edit, move, and delete tasks across three status columns: To Do, In Progress, and Done. This project was built to consolidate knowledge in modern web development, covering the full application cycle — from database to user interface — with containerization via Docker.

> Project status: In development.

> Current version: 1.0-SNAPSHOT

> Java version: JDK 25 | Spring Boot: 4.1.1

<br>

# ⚙️ How it works

To run the project locally with Docker, clone the repository and execute:

```bash
git clone https://github.com/JB-2499/kanban-app
cd kanban-app
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:4200
- API documentation (Swagger): http://localhost:8080/swagger-ui.html

<br>

To run without Docker, PostgreSQL must be installed. Create the database manually:

```sql
CREATE USER kanban_user WITH PASSWORD 'kanban_pass';
CREATE DATABASE kanban_db OWNER kanban_user;
```

Then, start the backend and frontend separately:

```bash
# Backend
cd backend
./mvnw spring-boot:run

# Frontend
cd frontend
npm install
ng serve
```

<br>

The system includes the following features:

<br>

Function | What it does
---------|-------------
Create task | Opens a form where the user provides a title and description. The task is automatically placed in the "To Do" column.
Edit task | Allows updating the title and description of an existing task.
Move task | The user can drag and drop tasks between the "To Do", "In Progress", and "Done" columns.
Delete task | Permanently removes a task from the system.
List tasks | The main screen displays all tasks organized in their respective columns.

<br>

# 🗂️ Directory hierarchy

```
|-- kanban-app
|   |-- backend
|   |   |-- src/main/java/barreto/kanbanApp
|   |   |   |-- model
|   |   |   |-- dto
|   |   |   |-- repository
|   |   |   |-- service
|   |   |   |-- controller
|   |   |   |-- config
|   |   |   |-- exception
|   |-- frontend
|   |   |-- src/app
|   |   |   |-- board
|   |   |   |-- column
|   |   |   |-- task-card
|   |   |   |-- services
|   |-- docker-compose.yml
```

<br>

Directory | Function
----------|----------
backend | Contains the full Spring Boot application, responsible for the REST API and database communication.
backend/model | JPA entities and enums mapped to database tables.
backend/repository | Data access interfaces using Spring Data JPA.
backend/service | Business logic layer of the application.
backend/controller | REST endpoints exposed by the API.
backend/config | General application settings such as CORS configuration.
backend/exception | Custom exception classes and global error handler.
frontend | Angular application responsible for the user interface.
frontend/board | Main component that displays the Kanban board with columns.
frontend/task-card | Individual component for each task card on the board.
frontend/services | HTTP services responsible for communicating with the API.

<br>

# 🌐 API Endpoints

Method | Route | Description
-------|-------|------------
GET | /api/tasks | Returns all tasks grouped by column
POST | /api/tasks | Creates a new task
PUT | /api/tasks/{id} | Updates a task's title and description
PATCH | /api/tasks/{id}/move | Moves a task to another column
DELETE | /api/tasks/{id} | Deletes a task

<br>

# 🛠️ Requirements

The following software components must be installed to run the project:

- Java JDK 25 or newer
- Node.js 18 or newer
- Angular CLI 17 or newer
- Docker and Docker Compose (for containerized execution)
- PostgreSQL 16 (for local execution without Docker)

<br>

# 💾 Planned improvements for future releases

- User authentication with Spring Security and JWT.
- Support for multiple Kanban boards per user.
- Task comments and attachments.
- Filters and search by title or status.
- Cloud deployment.
