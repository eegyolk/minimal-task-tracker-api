import { DATABASE } from "../utils/constants.js";
import { openDatabase } from "./database.js";

async function setupSQLITEDatabase() {
	// Open SQLite connection
	const db = await openDatabase();

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
    `);

	// Insert dummy data
	await db.run(
		"INSERT INTO tasks (user, title, description, status, dateCreated, dateUpdated) VALUES (?, ?, ?, ?, ? ,?)",
		"Jhayr",
		"Create minimal task tracker api",
		"To create a minimal task tracker api component as part of the technical evaluation.",
		"PENDING", // STATUSES: PENDING, INPROGRESS, COMPLETED, INCOMPLETE
		"2025-02-27 01:02:03", // DATE TIME FORMAT: YYYY-MM-DD HH:MM:SS.SSS
		""
	);
	await db.run(
		"INSERT INTO tasks (user, title, description, status, dateCreated, dateUpdated) VALUES (?, ?, ?, ?, ? ,?)",
		"Jhayr",
		"Create minimal task tracker frontend",
		"To create a minimal task tracker fronted component as part of the technical evaluation.",
		"PENDING", // STATUSES: PENDING, COMPLETED, INCOMPLETE
		"2025-02-27 04:05:06", // DATE TIME FORMAT: YYYY-MM-DD HH:MM:SS.SSS
		""
	);

	// Close connection
	await db.close();
}

async function setupAZURECOSMOSDatabase() {
	// Open Azure Cosmos connection
	const db = await openDatabase();

	// Create the container if it does not exist
	const { container } = await db.containers.createIfNotExists({
		id: "Tasks",
		partitionKey: { kind: "Hash", paths: ["/id"] },
	});

	// Verify if the dummy task items already exists
	const tasks = await container.items.readAll().fetchAll();
	const found1 = tasks.resources.find((item) => item.id === "1one1");
	const found2 = tasks.resources.find((item) => item.id === "2two2");

	// Create dummy task items
	if (!found1) {
		await container.items.upsert({
			id: "1one1",
			user: "John",
			title: "My title 1",
			description: "My description 1",
			status: "PENDING",
			dateCreated: "3/2/2025 1:11:49 AM",
			dateUpdated: "",
		});
	}

	if (!found2) {
		await container.items.upsert({
			id: "2two2",
			user: "Jane",
			title: "My title 2",
			description: "My description 2",
			status: "PENDING",
			dateCreated: "3/2/2025 2:11:49 AM",
			dateUpdated: "",
		});
	}
}

if (process.env.DATABASE === DATABASE.SQLITE) {
	setupSQLITEDatabase().catch((err) => {
		console.error(err.message);
	});
} else if (process.env.DATABASE === DATABASE.AZURE_COSMOS) {
	setupAZURECOSMOSDatabase().catch((err) => {
		console.error(err.message);
	});
}
