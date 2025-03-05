import { DATABASE } from "@/utils/constants";
import { sqliteDB } from "./sqliteDB";
import { cosmosDB } from "./cosmosDB";

export const dataAccessObject = {
	async queryData() {
		if (process.env.DATABASE === DATABASE.SQLITE) {
			return await sqliteDB.selectData();
		} else if (process.env.DATABASE === DATABASE.AZURE_COSMOS) {
			return await cosmosDB.selectData();
		}
	},

	async queryDataById(id) {
		if (process.env.DATABASE === DATABASE.SQLITE) {
			return await sqliteDB.selectDataById(id);
		} else if (process.env.DATABASE === DATABASE.AZURE_COSMOS) {
			return await cosmosDB.selectDataById(id);
		}
	},

	async insertData(rawBody) {
		if (process.env.DATABASE === DATABASE.SQLITE) {
			await sqliteDB.insertData(rawBody);
		} else if (process.env.DATABASE === DATABASE.AZURE_COSMOS) {
			await cosmosDB.insertData(rawBody);
		}
	},

	async updateData(id, rawBody) {
		if (process.env.DATABASE === DATABASE.SQLITE) {
			await sqliteDB.updateData(id, rawBody);
		} else if (process.env.DATABASE === DATABASE.AZURE_COSMOS) {
			await cosmosDB.updateData(id, rawBody);
		}
	},

	async deleteData(id) {
		if (process.env.DATABASE === DATABASE.SQLITE) {
			return await sqliteDB.deleteData(id);
		} else if (process.env.DATABASE === DATABASE.AZURE_COSMOS) {
			return await cosmosDB.deleteData(id);
		}
	},

	async searchData(query) {
		if (process.env.DATABASE === DATABASE.SQLITE) {
			return await sqliteDB.search(query);
		} else if (process.env.DATABASE === DATABASE.AZURE_COSMOS) {
			return await cosmosDB.search(query);
		}
	},
};
