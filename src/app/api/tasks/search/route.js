import { dataAccessObject } from "@/data/dataAccessObject";
import { NextResponse } from "next/server";

export async function GET(req) {
	// Extract query from the URL
	const searchParams = req.nextUrl.searchParams;
	const query = searchParams.get("query");

	const task = await dataAccessObject.searchData(query);

	if (!task) {
		return NextResponse.json({ error: "Task not found" }, { status: 404 });
	}

	// Return the todos as a JSON response with a 200 status code
	return NextResponse.json(task, { status: 200 });
}
