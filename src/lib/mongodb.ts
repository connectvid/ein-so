// Server-only MongoDB connection. Uses a globally-cached client promise so we
// reuse one connection across serverless invocations / HMR reloads instead of
// opening a new pool on every request.
import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "ein_so";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

/** Whether a MongoDB connection string is present. */
export function isMongoConfigured(): boolean {
  return Boolean(uri);
}

/** Connect (once) and return the application database. */
export async function getDb(): Promise<Db> {
  if (!uri) throw new Error("MONGODB_URI is not configured");
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  const client = await global._mongoClientPromise;
  return client.db(dbName);
}
