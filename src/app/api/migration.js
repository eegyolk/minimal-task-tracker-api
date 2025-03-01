import { openDatabase } from './database.js' 

async function setupDatabase() {
    // Open SQLite connection
    const db = await openDatabase()

    // Define table schema
    await db.exec(`
        CREATE TABLE tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user TEXT, 
            title TEXT,
            description TEXT,
            status TEXT,
            dateCreated TEXT,
            dateUpdated TEXT
        );
    `)

    // Insert dummy data
    await db.run(
        'INSERT INTO tasks (user, title, description, status, dateCreated, dateUpdated) VALUES (?, ?, ?, ?, ? ,?)',
        'Jhayr', 
        'Create minimal task tracker api',
        'To create a minimal task tracker api component as part of the technical evaluation.',
        'PENDING', // STATUSES: PENDING, INPROGRESS, COMPLETED, INCOMPLETE
        '2025-02-27 01:02:03', // DATE TIME FORMAT: YYYY-MM-DD HH:MM:SS.SSS
        ''
    );
    await db.run(
        'INSERT INTO tasks (user, title, description, status, dateCreated, dateUpdated) VALUES (?, ?, ?, ?, ? ,?)',
        'Jhayr', 
        'Create minimal task tracker frontend',
        'To create a minimal task tracker fronted component as part of the technical evaluation.',
        'PENDING', // STATUSES: PENDING, COMPLETED, INCOMPLETE
        '2025-02-27 04:05:06', // DATE TIME FORMAT: YYYY-MM-DD HH:MM:SS.SSS
        ''
    );
  
    // Close connection
    await db.close()  
}

setupDatabase().catch(err => {
    console.error(err.message)
})
