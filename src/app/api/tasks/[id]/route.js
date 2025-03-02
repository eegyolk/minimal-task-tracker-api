import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Initialize a variable to hold the SQLite database connection
let db = null;

export async function GET(req, { params }) {
	const { id } = await params; // Extract ID from the URL

	// Open a new connection if there is none
	if (!db) {
		db = await open({
			filename: "./tasktracker.db",
			driver: sqlite3.Database,
		});
	}

	// Query to get the task with the given id
	const task = await db.get("SELECT * FROM tasks WHERE id = ?", id);

	if (!task) {
		return NextResponse.json({ error: "Task not found" }, { status: 404 });
	}

	// Return the todos as a JSON response with a 200 status code
	return NextResponse.json(task, { status: 200 });
}

export async function PUT(req, { params }) {
	const { id } = await params; // Extract ID from the URL

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

	// Extract values and add the id to array
	const values = Object.values(body);
	values.push(id);

	// Extract fields
	const fields = Object.keys(body);
	let updateFields = "";
	fields.forEach((item, index) => {
		updateFields += `${item}=?`;
		if (Object.values(body).length - 1 != index) {
			updateFields += ",";
		}
	});

	// Update task into the "tasks" table
	await db.run(`UPDATE tasks SET ${updateFields} WHERE id=?`, values);

	// Return a success message as a JSON response with a 200 status code
	return NextResponse.json(
		{ message: "Successfully updated a task." },
		{ status: 200 }
	);
}

export async function DELETE(req, { params }) {
	const { id } = await params; // Extract ID from the URL

	// Open a new connection if there is none
	if (!db) {
		db = await open({
			filename: "./tasktracker.db",
			driver: sqlite3.Database,
		});
	}

	// Query to get the task with the given ID
	const task = await db.get("SELECT id FROM tasks WHERE id = ?", id);

	if (!task) {
		return NextResponse.json({ error: "Task not found" }, { status: 404 });
	}

	// Delete task into the "tasks" table
	await db.run(`DELETE FROM tasks WHERE id=?`, id);

	// Return a success message as a JSON response with a 200 status code
	return NextResponse.json(
		{ message: "Successfully deleted a task." },
		{ status: 200 }
	);
}
