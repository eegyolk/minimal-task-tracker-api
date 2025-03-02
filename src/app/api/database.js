import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Open SQLite database connection
export async function openDatabase() {
	return open({
		filename: "./tasktracker.db",
		driver: sqlite3.Database,
	});
}
