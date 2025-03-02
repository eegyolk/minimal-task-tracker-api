import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Initialize a variable to hold the SQLite database connection
let db = null;

export async function GET() {
	// Open a new connection if there is none
	if (!db) {
		db = await open({
			filename: "./tasktracker.db",
			driver: sqlite3.Database,
		});
	}

	// Query to get all tasks from the "tasks" table
	const tasks = await db.all("SELECT * FROM tasks");

	// Return the todos as a JSON response with a 200 status code
	return NextResponse.json(tasks, { status: 200 });
}

export async function POST(req) {
	// Open a new connection if there is none
	if (!db) {
		db = await open({
			filename: "./tasktracker.db",
			driver: sqlite3.Database,
		});
	}

	// Get raw request body
	const rawBody = await req.text();

	// Parse JSON manually
	const body = JSON.parse(rawBody);

	// Extract fields and values
	const fields = Object.keys(body).toString();
	const values = Object.values(body);

	let insertValues = "";
	values.forEach((item, index) => {
		insertValues += `"${item}"`;
		if (Object.values(body).length - 1 != index) {
			insertValues += ",";
		}
	});

	// Insert the new task into the "tasks" table
	await db.run(`INSERT INTO tasks (${fields}) VALUES (${insertValues})`);

	// Return a success message as a JSON response with a 201 status code
	return NextResponse.json(
		{ message: "Successfully created a task." },
		{ status: 201 }
	);
}
