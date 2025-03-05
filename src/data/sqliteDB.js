import { openDatabase } from "@/db/database";

export const sqliteDB = {
	async selectData() {
		// Open SQLite connection
		const db = await openDatabase();

		// Query to get all tasks from the "tasks" table
		return await db.all("SELECT * FROM tasks");
	},

	async selectDataById(id) {
		// Open SQLite connection
		const db = await openDatabase();

		// Query to get the task with the given id
		return await db.get("SELECT * FROM tasks WHERE id = ?", id);
	},

	async insertData(rawBody) {
		// Open SQLite connection
		const db = await openDatabase();

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
	},

	async updateData(id, rawBody) {
		// Open SQLite connection
		const db = await openDatabase();

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
	},

	async deleteData(id) {
		// Open SQLite connection
		const db = await openDatabase();

		// Query to get the task with the given ID
		const task = await db.get("SELECT id FROM tasks WHERE id = ?", id);

		if (!task) {
			return false;
		}

		// Delete task into the "tasks" table
		await db.run(`DELETE FROM tasks WHERE id=?`, id);
	},

	async search(query) {
		// Open SQLite connection
		const db = await openDatabase();

		// Query to get the task with the given query (title or description)
		return await db.all(
			"SELECT * FROM tasks WHERE title LIKE ? OR description LIKE ?",
			[`%${query}%`, `%${query}%`]
		);
	},
};
