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
    },
    {
        "id": 4,
        "user": "John",
        "title": "My title 2",
        "description": "My description 2",
        "status": "INCOMPLETE",
        "dateCreated": "2025-02-08 10:11:12",
        "dateUpdated": "3/2/2025 2:21:49 PM"
    },
    {
        "id": 7,
        "user": "Edgardo",
        "title": "Sample 1",
        "description": "My task description sample 1",
        "status": "INPROGRESS",
        "dateCreated": "3/2/2025 9:58:02 AM",
        "dateUpdated": "3/2/2025 1:45:04 PM"
    },
    {
        "id": 8,
        "user": "Vivian",
        "title": "Create final project in Android",
        "description": "To create the final project in Android mobile development",
        "status": "COMPLETED",
        "dateCreated": "3/2/2025 10:06:17 AM",
        "dateUpdated": "3/2/2025 1:11:05 PM"
    },
    {
        "id": 9,
        "user": "Edgardo",
        "title": "Create game maker app",
        "description": "My game maker app task description",
        "status": "COMPLETED",
        "dateCreated": "3/2/2025 1:33:29 PM",
        "dateUpdated": "3/2/2025 1:34:09 PM"
    },
    {
        "id": 11,
        "user": "Edgardo",
        "title": "Sample task",
        "description": "Aaa",
        "status": "INPROGRESS",
        "dateCreated": "3/2/2025 3:09:26 PM",
        "dateUpdated": "3/2/2025 3:17:49 PM"
    },
    {
        "id": 12,
        "user": "Bbb",
        "title": "Bbbbbbbb",
        "description": "Cccccccccc",
        "status": "PENDING",
        "dateCreated": "3/2/2025 3:17:15 PM",
        "dateUpdated": ""
    },
    {
        "id": 13,
        "user": "Aaa",
        "title": "Aaa Aaa ",
        "description": "Aaa Aaa Aaa",
        "status": "PENDING",
        "dateCreated": "3/2/2025 4:05:59 PM",
        "dateUpdated": ""
    },
    {
        "id": 14,
        "user": "Ccccc",
        "title": "c",
        "description": "Aaa Aaa Aaa",
        "status": "PENDING",
        "dateCreated": "3/2/2025 4:05:59 PM",
        "dateUpdated": ""
    },
    {
        "id": 15,
        "user": "A111",
        "title": "A11111111",
        "description": "A11111111111",
        "status": "PENDING",
        "dateCreated": "3/2/2025 4:09:15 PM",
        "dateUpdated": ""
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
