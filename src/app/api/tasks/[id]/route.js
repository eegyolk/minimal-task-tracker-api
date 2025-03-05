import { NextResponse } from "next/server";
import { dataAccessObject } from "@/data/dataAccessObject";

export async function GET(req, { params }) {
	const { id } = await params; // Extract ID from the URL

	// Select specific task by id
	const task = await dataAccessObject.queryDataById(id);

	if (!task) {
		return NextResponse.json({ error: "Task not found" }, { status: 404 });
	}

	// Return the todos as a JSON response with a 200 status code
	return NextResponse.json(task, { status: 200 });
}

export async function PUT(req, { params }) {
	const { id } = await params; // Extract ID from the URL

	// Get raw request body
	const rawBody = await req.text();

	await dataAccessObject.updateData(id, rawBody);

	// Return a success message as a JSON response with a 200 status code
	return NextResponse.json(
		{ message: "Successfully updated a task." },
		{ status: 200 }
	);
}

export async function DELETE(req, { params }) {
	const { id } = await params; // Extract ID from the URL

	const result = await dataAccessObject.deleteData(id);

	if (typeof result === "boolean" && result === false) {
		return NextResponse.json({ error: "Task not found" }, { status: 404 });
	}

	// Return a success message as a JSON response with a 200 status code
	return NextResponse.json(
		{ message: "Successfully deleted a task." },
		{ status: 200 }
	);
}
