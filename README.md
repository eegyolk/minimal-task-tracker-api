# Minimal Task Tracker API

## Description

This is a minimal task tracker API built with Next.js and SQLite. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on tasks. Tasks are stored in an SQLite database and include attributes like user, title, description, status, and timestamps for creation and updates.

### Key Features:

- **Create a task**: Add new tasks to the database with details such as title, description, status, and dates.
- **Retrieve tasks**: Get a list of all tasks or retrieve a specific task by ID.
- **Update a task**: Modify the details of a task, including its title, description, and status.
- **Delete a task**: Remove tasks from the database.
- **Search tasks**: Search for tasks by title or description.

## Setup Instructions

### Prerequisites

Ensure that you have the following installed:

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

   or if you are using yarn:

   ```bash
   yarn install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

3. Open the app in your browser:
   - Navigate to `http://localhost:3000` to view the app.

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
  ```
  {
    "id": 1,
    "user": "John",
    "title": "My title 2",
    "description": "My description 2",
    "status": "INCOMPLETE",
    "dateCreated": "2025-02-08 10:11:12",
    "dateUpdated": "3/2/2025 1:11:49 PM"
  }
  ```

## POST /api/tasks

- **Request Body**: JSON object containing task details.
  ```
  {
    "user": "John",
    "title": "My title 3",
    "description": "My description 4",
    "status": "PENDING",
    "dateCreated": "2025-02-08 13:14:15",
    "dateUpdated": ""
  }
  ```
  
- **Response**: Confirmation message upon successful creation.
  ```
  {
    "message": "Successfully created a task."
  }
  ```

## PUT /api/tasks/{id}

- **Request Body**: JSON object with updated task details.
  ```
  {
    "user": "John",
    "title": "My title 2",
    "description": "My description 2",
    "status": "COMPLETED",
    "dateCreated": "2025-02-08 10:11:12",
    "dateUpdated": "2025-02-08 12:13:14"
  }
  ```
  
- **Response**: Confirmation message upon successful update.
  ```
  {
    "message": "Successfully updated a task."
  }
  ```

## DELETE /api/tasks/{id}

- **Response**: Confirmation message upon successful deletion.
  ```
  {
    "message": "Successfully deleted a task."
  }
  ```

## GET /api/tasks/search?query={keyword}

- **Response**: Tasks matching the keyword in either the title or description.
  ```
  [
    {
        "id": 8,
        "user": "Vivian",
        "title": "Create final project in Android",
        "description": "To create the final project in Android mobile development",
        "status": "COMPLETED",
        "dateCreated": "3/2/2025 10:06:17 AM",
        "dateUpdated": "3/2/2025 1:11:05 PM"
    }
  ]
  ```

### API Endpoints:

- The database is stored locally in a file called tasktracker.db.
- The project uses Next.js (version 15.2.0) for the backend and SQLite as the database.
