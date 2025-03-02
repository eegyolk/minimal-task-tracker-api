# Minimal Task Tracker API

## Description

This is a minimal task tracker API built with Next.js and SQLite. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on tasks. Tasks are stored in an SQLite database and include attributes like user, title, description, status, and timestamps for creation and updates.

### Key Features:

- **Create a task**: Add new tasks to the database with details such as title, description, status, and dates.
- **Retrieve tasks**: Get a list of all tasks or retrieve a specific task by ID.
- **Update a task**: Modify the details of a task, including its title, description, and status.
- **Delete a task**: Remove tasks from the database.
- **Search tasks**: Search for tasks by title or description.

### API Endpoints:

## GET /api/tasks

- **Response**: List all tasks in the database.
  ```
  [
    {
        "id": 1,
        "user": "John",
        "title": "My title 2",
        "description": "My description 2",
        "status": "INCOMPLETE",
        "dateCreated": "2025-02-08 10:11:12",
        "dateUpdated": "3/2/2025 1:11:49 PM"
    },
    {
        "id": 2,
        "user": "Jhayr",
        "title": "Create minimal task tracker frontend",
        "description": "To create a minimal task tracker fronted component as part of the technical evaluation.",
        "status": "INPROGRESS",
        "dateCreated": "2025-02-27 04:05:06",
        "dateUpdated": "3/2/2025 12:40:48 PM"
    },
    {
        "id": 3,
        "user": "John",
        "title": "My title 1",
        "description": "My description 1",
        "status": "PENDING",
        "dateCreated": "2025-02-08 07:08:09",
        "dateUpdated": "3/2/2025 1:49:56 PM"
    }
  ]
  ```

## GET /api/tasks/{id}

- **Response**: Returns the task with the given id.

## POST /api/tasks

- **Request Body**: JSON object containing task details.
- **Response**: Confirmation message upon successful creation.

## PUT /api/tasks/{id}

- **Request Body**: JSON object with updated task details.
- **Response**: Confirmation message upon successful update.

## DELETE /api/tasks/{id}

- **Response**: Confirmation message upon successful deletion.

## GET /api/tasks/search?query={keyword}

- **Response**: Tasks matching the keyword in either the title or description.

### API Endpoints:

- The database is stored locally in a file called tasktracker.db.
- The project uses Next.js (version 15.2.0) for the backend and SQLite as the database.
