import { NextResponse } from "next/server";
import { dataAccessObject } from "@/data/dataAccessObject";

export async function GET() {
	// Select all tasks to database
	const tasks = await dataAccessObject.queryData();

	// Return the todos as a JSON response with a 200 status code
	return NextResponse.json(tasks, { status: 200 });
}

export async function POST(req) {
	// Get raw request body
	const rawBody = await req.text();

	await dataAccessObject.insertData(rawBody);

	// Return a success message as a JSON response with a 201 status code
	return NextResponse.json(
		{ message: "Successfully created a task." },
		{ status: 201 }
	);
}
