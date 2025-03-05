import { openDatabase } from "@/db/database";
import { v4 as uuidv4 } from "uuid";

export const cosmosDB = {
	async selectData() {
		// Open Azure Cosmos connection
		const db = await openDatabase();

		// Get the container
		const container = db.container("Tasks");

		// Use the items property to run a query
		const { resources: tasks } = await container.items
			.query({
				query: "SELECT * FROM Tasks",
			})
			.fetchAll();

		return tasks;
	},

	async selectDataById(id) {
		// Open Azure Cosmos connection
		const db = await openDatabase();

		// Get the container
		const container = db.container("Tasks");

		// Use the items property to run a query
		const { resources: tasks } = await container.items
			.query({
				query: "SELECT * FROM Tasks t WHERE t.id = @id",
				parameters: [{ name: "@id", value: id }],
			})
			.fetchAll();

		if (tasks.length > 0) {
			return tasks[0];
		}

		return;
	},

	async insertData(rawBody) {
		// Open Azure Cosmos connection
		const db = await openDatabase();

		// Get the container
		const container = db.container("Tasks");

		// Parse the raw body and generate the id value
		const jsonBody = JSON.parse(rawBody);
		jsonBody.id = uuidv4();

		// Use the items property to insert the new item
		await container.items.upsert(jsonBody);
	},

	async updateData(id, rawBody) {
		// Open Azure Cosmos connection
		const db = await openDatabase();

		// Get the container
		const container = db.container("Tasks");

		// Parse the raw body
		const jsonBody = JSON.parse(rawBody);

		// Specify the id and the patition key value, and specify all the data to be update
		await container.item(id, id).patch([
			{ op: "set", path: "/user", value: jsonBody.user },
			{ op: "set", path: "/title", value: jsonBody.title },
			{ op: "set", path: "/description", value: jsonBody.description },
			{ op: "set", path: "/status", value: jsonBody.status },
			{ op: "set", path: "/dateCreated", value: jsonBody.dateCreated },
			{ op: "set", path: "/dateUpdated", value: jsonBody.dateUpdated },
		]);
	},

	async deleteData(id) {
		// Open Azure Cosmos connection
		const db = await openDatabase();

		// Get the container
		const container = db.container("Tasks");

		// Specify the id and the patition key value for deletion
		await container.item(id, id).delete();
	},

	async search(query) {
		// Open Azure Cosmos connection
		const db = await openDatabase();

		// Get the container
		const container = db.container("Tasks");

		// Use the items property to run a query
		const { resources: tasks } = await container.items
			.query({
				query:
					"SELECT * FROM Tasks t WHERE t.title LIKE @title OR t.description LIKE @description",
				parameters: [
					{ name: "@title", value: `%${query}%` },
					{ name: "@description", value: `%${query}%` },
				],
			})
			.fetchAll();

		return tasks;
	},
};
