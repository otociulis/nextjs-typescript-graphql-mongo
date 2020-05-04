import { MongoClient, Db } from "mongodb";
export * from "./types";

const url = "mongodb://localhost:27017";
const dbName = "ntgm";

export let client: MongoClient;
export let database: Db;

export const connect = async (): Promise<Db> => {
  if (!database) {
    console.info(`Connecting to database ${url}`);
    client = await MongoClient.connect(url);
    database = client.db(dbName);
  }

  return database;
};
