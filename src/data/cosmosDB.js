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

		const jsonBody = JSON.parse(rawBody);
		jsonBody.id = uuidv4();

		await container.items.upsert(jsonBody);
	},

	async updateData(id, rawBody) {
		// // Open SQLite connection
		// const db = await openDatabase();
		// // Parse JSON manually
		// const body = JSON.parse(rawBody);
		// // Extract values and add the id to array
		// const values = Object.values(body);
		// values.push(id);
		// // Extract fields
		// const fields = Object.keys(body);
		// let updateFields = "";
		// fields.forEach((item, index) => {
		// 	updateFields += `${item}=?`;
		// 	if (Object.values(body).length - 1 != index) {
		// 		updateFields += ",";
		// 	}
		// });
		// // Update task into the "tasks" table
		// await db.run(`UPDATE tasks SET ${updateFields} WHERE id=?`, values);
	},

	async deleteData(id) {
		// // Open SQLite connection
		// const db = await openDatabase();
		// // Query to get the task with the given ID
		// const task = await db.get("SELECT id FROM tasks WHERE id = ?", id);
		// if (!task) {
		// 	return false;
		// }
		// // Delete task into the "tasks" table
		// await db.run(`DELETE FROM tasks WHERE id=?`, id);
	},

	async search(query) {
		// // Open SQLite connection
		// const db = await openDatabase();
		// // Query to get the task with the given query (title or description)
		// return await db.all(
		// 	"SELECT * FROM tasks WHERE title LIKE ? OR description LIKE ?",
		// 	[`%${query}%`, `%${query}%`]
		// );
	},
};
