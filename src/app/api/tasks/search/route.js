import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Initialize a variable to hold the SQLite database connection
let db = null;

export async function GET(req) {
	// Extract query from the URL
	const searchParams = req.nextUrl.searchParams;
	const query = searchParams.get("query");

	console.log(query);

	// Open a new connection if there is none
	if (!db) {
		db = await open({
			filename: "./tasktracker.db",
			driver: sqlite3.Database,
		});
	}

	// Query to get the task with the given query (title or description)
	const task = await db.all(
		"SELECT * FROM tasks WHERE title LIKE ? OR description LIKE ?",
		[`%${query}%`, `%${query}%`]
	);

	if (!task) {
		return NextResponse.json({ error: "Task not found" }, { status: 404 });
	}

	// Return the todos as a JSON response with a 200 status code
	return NextResponse.json(task, { status: 200 });
}
