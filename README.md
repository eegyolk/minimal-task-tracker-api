This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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
