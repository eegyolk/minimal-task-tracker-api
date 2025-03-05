import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { DATABASE } from "../utils/constants.js";
import { CosmosClient } from "@azure/cosmos";

// Open SQLite database connection
export async function openDatabase() {
	if (process.env.DATABASE === DATABASE.SQLITE) {
		return open({
			filename: "./tasktracker.db",
			driver: sqlite3.Database,
		});
	}

	if (process.env.DATABASE === DATABASE.AZURE_COSMOS) {
		const client = new CosmosClient({
			endpoint: process.env.AZURE_COSMOS_ENDPOINT,
			key: process.env.AZURE_COSMOS_KEY,
			userAgentSuffix: "MinimalTaskTrackerApi",
		});

		// Create the database if it does not exist
		const { database } = await client.databases.createIfNotExists({
			id: "TaskTracker",
		});

		return database;
	}
}
